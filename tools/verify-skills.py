#!/usr/bin/env python3
"""Verify a reviewed skill collection without network or third-party modules."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import sys


def verify(root, manifest_path):
    manifest = json.loads(manifest_path.read_text())
    skills = manifest['skills']
    roots = manifest['discovery_roots']
    assert manifest['version'] == 1 and skills and roots
    assert len({s['name'] for s in skills}) == len(skills), 'duplicate skill'
    if manifest.get('distribution_snapshot'):
        assert re.fullmatch(r'[0-9a-f]{40}', manifest['canonical']['commit']), 'invalid canonical pin'
    total = 0
    for skill in skills:
        name = skill['name']
        assert re.fullmatch(r'[a-z0-9-]{1,64}', name), f'invalid name: {name}'
        expected = skill['files']
        assert {'SKILL.md', 'LICENSE', 'NOTICE.md'} <= set(expected), name
        for folder in roots:
            directory = root / folder / name
            assert directory.is_dir() and not directory.is_symlink(), str(directory)
            actual = {p.relative_to(directory).as_posix() for p in directory.rglob('*') if p.is_file()}
            assert actual == set(expected), f'file inventory mismatch: {directory}'
            for rel, digest in expected.items():
                path = directory / rel
                assert not path.is_symlink() and directory.resolve() in path.resolve().parents, str(path)
                data = path.read_bytes()
                assert hashlib.sha256(data).hexdigest() == digest, f'hash mismatch: {path}'
                content = data.decode('utf-8')
                assert chr(0x2014) not in content, f'em dash: {path}'
                assert not re.search(r'/home/|/Users/|[A-Z]:[\\]', content), f'absolute machine path: {path}'
                for target in re.findall(r'\[[^\]]*\]\(([^)]+)\)', content):
                    if re.match(r'https?://|#', target):
                        continue
                    assert (path.parent / target.split('#')[0]).is_file(), f'missing reference: {path}: {target}'
                total += 1
            entry = (directory / 'SKILL.md').read_text()
            assert entry.startswith('---\n') and '\n---\n' in entry[4:], f'frontmatter: {directory}'
            header = entry.split('---\n', 2)[1]
            assert re.search(r'^name: ' + re.escape(name) + r'\s*$', header, re.M), name
            assert re.search(r'^description: \S.+$', header, re.M), name
    if manifest.get('distribution_snapshot'):
        for folder in roots:
            actual_names = {p.name for p in (root / folder).iterdir() if p.is_dir()}
            assert actual_names == {s['name'] for s in skills}, f'unlisted skills in {folder}'
    print(f'OK: {len(skills)} logical skills, {len(roots)} content roots, {total} files; pins, inventories, hashes, mirrors and references verified')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--manifest', type=Path, required=True)
    parser.add_argument('--root', type=Path, default=Path.cwd())
    args = parser.parse_args()
    try:
        verify(args.root.resolve(), args.manifest.resolve())
    except (AssertionError, KeyError, ValueError, OSError) as error:
        print(f'FAIL: {error}', file=sys.stderr)
        sys.exit(1)
