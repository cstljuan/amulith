import ts from 'typescript';
import { readFile } from 'node:fs/promises';
export async function resolve(specifier, context, next) {
  if (specifier === '@protocol/messages') return { url:new URL('../../../../protocol/messages.ts',import.meta.url).href,shortCircuit:true };
  return next(specifier,context);
}
export async function load(url, context, next) {
  if (url.endsWith('.ts')) {
    const source = await readFile(new URL(url),'utf8');
    return {format:'module',shortCircuit:true,source:ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,verbatimModuleSyntax:true}}).outputText};
  }
  return next(url,context);
}
