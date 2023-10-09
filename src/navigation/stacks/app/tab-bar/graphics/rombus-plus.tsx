import Svg, { Path, Rect, SvgProps, G } from 'react-native-svg';
import { useThemeCxt } from '@/style/exports';

export default function RombusPlus({ ...props }: SvgProps) {
  const { theme } = useThemeCxt();

  return (
    <Svg
      width='70'
      height='70'
      viewBox='0 0 64 64'
      fill='none'
      {...props}>
      <Rect
        width='44.8833'
        height='44.8833'
        rx='8'
        transform='matrix(0.705263 -0.708946 0.705263 0.708946 0 31.8198)'
        fill={theme.primary}
      />
      <G style={{ scale: 1.2, transform: [{ translateX: -5 }, { translateY: -5 }] }}>
        <Path
          d='M31.656 40.5C36.3261 40.5 40.1119 36.6944 40.1119 32C40.1119 27.3056 36.3261 23.5 31.656 23.5C26.986 23.5 23.2002 27.3056 23.2002 32C23.2002 36.6944 26.986 40.5 31.656 40.5Z'
          stroke={theme.primaryContrast}
          strokeWidth='1.5'
        />
        <Path
          d='M31.6558 27V37'
          stroke={theme.primaryContrast}
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <Path
          d='M26.6821 32H36.9615'
          stroke={theme.primaryContrast}
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </G>
    </Svg>
  );
}
