// Locked palette from public/art/STYLE.md. Change values there and here together.
export const PALETTE = {
  ink: 0x1e1813,
  paper: 0xfbf6ea,
  bloomGround: 0xe9ddb8,
  bloomLeaf: 0x6fa35a,
  bloomPetal: 0xeba3b8,
  bloomGold: 0xe0ae3a,
  blightGround: 0x3d2852,
  blightIndigo: 0x2c3168,
  blightVein: 0xc7dc45,
  hollowKraft: 0xb99a6b,
  gladeWash: 0xcfd5ae,
  rootdeepBoard: 0x8c7b66,
} as const;

export const SHADOW_OPACITY = 0.3;

export const css = (hex: number) => `#${hex.toString(16).padStart(6, '0')}`;
