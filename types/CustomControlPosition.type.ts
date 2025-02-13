export const CustomControlPosition = {
  BLOCK_END_INLINE_CENTER: 0.0,
  BLOCK_END_INLINE_END: 1.0,
  BLOCK_END_INLINE_START: 2.0,
  BLOCK_START_INLINE_CENTER: 3.0,
  BLOCK_START_INLINE_END: 4.0,
  BLOCK_START_INLINE_START: 5.0,
  BOTTOM_CENTER: 6.0,
  BOTTOM_LEFT: 7.0,
  BOTTOM_RIGHT: 8.0,
  INLINE_END_BLOCK_CENTER: 9.0,
  INLINE_END_BLOCK_END: 10.0,
  INLINE_END_BLOCK_START: 11.0,
  INLINE_START_BLOCK_CENTER: 12.0,
  INLINE_START_BLOCK_END: 13.0,
  INLINE_START_BLOCK_START: 14.0,
  LEFT_BOTTOM: 15.0,
  LEFT_CENTER: 16.0,
  LEFT_TOP: 17.0,
  RIGHT_BOTTOM: 18.0,
  RIGHT_CENTER: 19.0,
  RIGHT_TOP: 20.0,
  TOP_CENTER: 21.0,
  TOP_LEFT: 22.0,
  TOP_RIGHT: 23.0,
};
export type CustomControlPosition =
  (typeof CustomControlPosition)[keyof typeof CustomControlPosition];
