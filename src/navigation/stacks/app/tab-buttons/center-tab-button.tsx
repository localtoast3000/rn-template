import { Button } from '@/components/pressables/exports';
import Svg, { Path, Circle, Line } from 'react-native-svg';

export default function CenterTab() {
  return (
    <Button styles={{ container: { width: 50 } }}>
      <AddIcon />
    </Button>
  );
}

function AddIcon() {
  return (
    <Svg
      width='100'
      height='100'>
      <Circle
        cx='50'
        cy='50'
        r='45'
        stroke='black'
        stroke-width='2'
        fill='none'
      />
      <Line
        x1='50'
        y1='20'
        x2='50'
        y2='80'
        stroke='black'
        stroke-width='2'
      />
      <Line
        x1='20'
        y1='50'
        x2='80'
        y2='50'
        stroke='black'
        stroke-width='2'
      />
    </Svg>
  );
}
