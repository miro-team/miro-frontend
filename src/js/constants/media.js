export const xshHeight = 415;
export const xshWidth = 737;
export const xsWidth = 768;
export const smWidth = 1025;
export const lgWidth = 1600;

export const media = {
  xsh: `@media (max-width: ${xshWidth}px) and (max-height: ${xshHeight}px) and (orientation: landscape)`,
  xs: `@media (max-width: ${xsWidth - 1}px)`,
  smMinus: `@media (max-width: ${smWidth}px)`,
  sm: `@media (min-width: ${xsWidth}px) and (max-width: ${smWidth - 1}px)`,
  smPlus: `@media (min-width: ${xsWidth}px)`,
  md: `@media (min-width: ${smWidth}px)`,
  lg: `@media (min-width: ${lgWidth}px)`,

  isXs: document.body.clientWidth < xsWidth,
  isSm: xsWidth < document.body.clientWidth < smWidth,
  isSmMinus: document.body.clientWidth < smWidth,
  isSmPlus: document.body.clientWidth > smWidth,
  isMd: smWidth < document.body.clientWidth < lgWidth,
  isLg: document.body.clientWidth > lgWidth,
};
