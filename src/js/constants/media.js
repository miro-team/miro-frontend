export let xsh_height = 415;
export let xsh_width = 737;
export let xs_width = 768;
export let sm_width = 1025;
export let lg_width = 1600;


export const media = {

    xsh: "@media (max-width: " + xsh_width + "px) and (max-height: " + xsh_height + "px) and (orientation: landscape)",
    xs: "@media (max-width: " + (xs_width - 1) + "px)",
    smMinus: "@media (max-width: " + sm_width + "px)",
    sm: "@media (min-width: " + xs_width + "px) and (max-width: " + (sm_width - 1) + "px)",
    smPlus: "@media (min-width: " + xs_width + "px)",
    md: "@media (min-width: " + sm_width + "px)",
    lg: "@media (min-width: " + lg_width + "px)",

    isXs: document.body.clientWidth < xs_width,
    isSm: xs_width < document.body.clientWidth < sm_width,
    isSmMinus: document.body.clientWidth < sm_width,
    isSmPlus: document.body.clientWidth > sm_width,
    isMd: sm_width < document.body.clientWidth < lg_width,
    isLg: document.body.clientWidth > lg_width
}
