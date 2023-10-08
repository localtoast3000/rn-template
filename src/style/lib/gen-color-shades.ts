import { HexColor, Theme } from '../lib/types';
import chroma from 'chroma-js';

export function generateColorShades(theme: Theme) {
  for (const themeType in theme) {
    theme[themeType] = generateShadesForTheme(theme[themeType]);
  }
  return theme;
}

export function generateShadesForTheme(
  theme: Record<string, HexColor | undefined>
): Record<string, HexColor | undefined> {
  const shades: Record<string, HexColor | undefined> = {};

  for (const [colorName, colorValue] of Object.entries(theme)) {
    if (!colorValue) continue; // Skip if the color value is undefined

    // Check if the color name already has a suffix (like 400, 500, Focus, etc.)
    // If it does, skip generating shades for it
    if (colorName.match(/\d{3}$|Focus$|Contrast$/)) continue;

    // Generate shades from 400 to 900
    for (let i = 4; i <= 9; i++) {
      const shadeName = `${colorName}${i}00`;
      if (!theme[shadeName]) {
        const factor = i - 5; // This will make 500 (base color) the midpoint
        shades[shadeName] =
          factor < 0
            ? (chroma(colorValue)
                .brighten(Math.abs(factor) * 0.5)
                .hex() as HexColor)
            : (chroma(colorValue)
                .darken(factor * 0.5)
                .hex() as HexColor);
      }
    }

    // Generate focused color
    if (!theme[`${colorName}Focus`]) {
      shades[`${colorName}Focus`] = chroma(colorValue).brighten(0.5).hex() as HexColor;
    }

    // Generate contrast color
    if (!theme[`${colorName}Contrast`]) {
      shades[`${colorName}Contrast`] =
        chroma(colorValue).luminance() > 0.5
          ? (chroma('black').hex() as HexColor)
          : (chroma('white').hex() as HexColor);
    }
  }

  return { ...theme, ...shades };
}
