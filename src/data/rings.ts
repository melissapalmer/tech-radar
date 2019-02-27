import { IRing } from '../types/IRing';
import { RingFilter } from '../types/RingFilter';

export const RINGS: IRing[] = [
  { radius: 90, name: 'EXPERT', color: '#93c47d' },
  { radius: 160, name: 'SKILLED', color: '#93d2c2' },
  { radius: 230, name: 'BASIC', color: '#fbdb84' },
  { radius: 290, name: 'NONE', color: '#efafa9' },
];

//export const CUSTOM_RING_FILTERS: RingFilter = {
//  'I know it quite well': ['ADOPT', 'SKILLED', 'NONE'],
//  'I would like to know it better': ['SKILLED', 'BASIC'],
//};
