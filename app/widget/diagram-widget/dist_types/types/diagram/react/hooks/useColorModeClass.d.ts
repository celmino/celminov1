import type { ColorMode, ColorModeClass } from '../../system';
/**
 * Hook for receiving the current color mode class 'dark' or 'light'.
 *
 * @internal
 * @param colorMode - The color mode to use ('dark', 'light' or 'system')
 */
export declare function useColorModeClass(colorMode: ColorMode): ColorModeClass;
