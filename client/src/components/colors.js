/**
 * Theme-aware colors.
 *
 * These constants reference CSS custom properties (see client/src/_styled.js) so that
 * the UI automatically adapts to the user's preferred color scheme (light/dark).
 * The actual values are defined on :root and overridden within
 * "@media (prefers-color-scheme: dark)".
 */
export const COLOR_LIGHTER_GREY = 'var(--color-lighter-grey)';
export const COLOR_LIGHT_GREY = 'var(--color-light-grey)';
export const COLOR_FONT_GREY = 'var(--color-font-grey)';
export const COLOR_BACKGROUND_GREY = 'var(--color-background-grey)';
export const COLOR_ORANGE = '#ff820a';
export const COLOR_BLUE = '#0099CC';
export const COLOR_WARNING = '#ee3f21';
export const COLOR_PURPLE = 'var(--color-purple)';

/* additional theme-aware colors (only used via CSS custom properties) */
export const COLOR_SURFACE = 'var(--color-surface)';
export const COLOR_SURFACE_INVERTED = 'var(--color-surface-inverted)';
export const COLOR_SURFACE_HOVER = 'var(--color-surface-hover)';
export const COLOR_BORDER_LIGHT = 'var(--color-border-light)';
