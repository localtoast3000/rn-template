import Svg, { Path, SvgProps } from 'react-native-svg';
import { useThemeCxt } from '@/style/exports';

export default function TabBarBackground({ ...props }: SvgProps) {
  const { theme } = useThemeCxt();

  return (
    <Svg
      viewBox='0 0 383 50'
      width='100%'
      height='100%'
      fill='none'
      {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M155.463 9.50734C155.305 9.34812 155.152 9.18555 155.004 9.01985C151.503 5.09111 147.488 0 142.226 0H9C4.02944 0 0 4.02944 0 9V56C0 60.9706 4.02944 65 9.00001 65H374C378.971 65 383 60.9706 383 56V9C383 4.02944 378.971 0 374 0H243.296C238.034 0 234.019 5.09111 230.518 9.01985C230.37 9.18555 230.217 9.34813 230.059 9.50735L201.224 38.4927C196.55 43.1911 188.972 43.1911 184.298 38.4927L155.463 9.50734Z'
        fill={theme.baseHighlight}
      />
    </Svg>
  );
}
