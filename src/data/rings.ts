import { IRing } from '../types/IRing';
import { RingFilter } from '../types/RingFilter';

export const RINGS: IRing[] = [
  { radius: 90, name: 'ADOPT', color: '#93c47d' },
  { radius: 160, name: 'TRIAL', color: '#93d2c2' },
  { radius: 230, name: 'ASSESS', color: '#fbdb84' },
  { radius: 290, name: 'HOLD', color: '#efafa9' },
];

//export const CUSTOM_RING_FILTERS: RingFilter = {
//  'I know it quite well': ['ADOPT', 'TRIAL', 'HOLD'],
//  'I would like to know it better': ['TRIAL', 'ASSESS'],
//};
