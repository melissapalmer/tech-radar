export interface IRadarEntry {
  ring: number;
  label: string;
  link?: string;
  active: boolean;
  quadrant: number;
  moved: number;
  id: number;
  segment?: any;
  x?: number;
  y?: number;
  color?: string;
}
