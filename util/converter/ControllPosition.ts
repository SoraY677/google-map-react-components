import { CustomControlPosition } from "@/types/CustomControlPosition.type";

export const convertControlPosition = (
  position: CustomControlPosition
): google.maps.ControlPosition | null => {
  switch (position) {
    case CustomControlPosition.BLOCK_END_INLINE_CENTER:
      return google.maps.ControlPosition.BLOCK_END_INLINE_CENTER;
    case CustomControlPosition.BLOCK_END_INLINE_END:
      return google.maps.ControlPosition.BLOCK_END_INLINE_END;
    case CustomControlPosition.BLOCK_END_INLINE_START:
      return google.maps.ControlPosition.BLOCK_END_INLINE_START;
    case CustomControlPosition.BLOCK_START_INLINE_CENTER:
      return google.maps.ControlPosition.BLOCK_START_INLINE_CENTER;
    case CustomControlPosition.BLOCK_START_INLINE_END:
      return google.maps.ControlPosition.BLOCK_START_INLINE_END;
    case CustomControlPosition.BLOCK_START_INLINE_START:
      return google.maps.ControlPosition.BLOCK_START_INLINE_START;
    case CustomControlPosition.BOTTOM_CENTER:
      return google.maps.ControlPosition.BOTTOM_CENTER;
    case CustomControlPosition.BOTTOM_LEFT:
      return google.maps.ControlPosition.BOTTOM_LEFT;
    case CustomControlPosition.BOTTOM_RIGHT:
      return google.maps.ControlPosition.BOTTOM_RIGHT;
    case CustomControlPosition.INLINE_END_BLOCK_CENTER:
      return google.maps.ControlPosition.INLINE_END_BLOCK_CENTER;
    case CustomControlPosition.INLINE_END_BLOCK_END:
      return google.maps.ControlPosition.INLINE_END_BLOCK_END;
    case CustomControlPosition.INLINE_END_BLOCK_START:
      return google.maps.ControlPosition.INLINE_END_BLOCK_START;
    case CustomControlPosition.INLINE_START_BLOCK_CENTER:
      return google.maps.ControlPosition.INLINE_START_BLOCK_CENTER;
    case CustomControlPosition.INLINE_START_BLOCK_END:
      return google.maps.ControlPosition.INLINE_START_BLOCK_END;
    case CustomControlPosition.INLINE_START_BLOCK_START:
      return google.maps.ControlPosition.INLINE_START_BLOCK_START;
    case CustomControlPosition.LEFT_BOTTOM:
      return google.maps.ControlPosition.LEFT_BOTTOM;
    case CustomControlPosition.LEFT_CENTER:
      return google.maps.ControlPosition.LEFT_CENTER;
    case CustomControlPosition.LEFT_TOP:
      return google.maps.ControlPosition.LEFT_TOP;
    case CustomControlPosition.RIGHT_BOTTOM:
      return google.maps.ControlPosition.RIGHT_BOTTOM;
    case CustomControlPosition.RIGHT_CENTER:
      return google.maps.ControlPosition.RIGHT_CENTER;
    case CustomControlPosition.RIGHT_TOP:
      return google.maps.ControlPosition.RIGHT_TOP;
    case CustomControlPosition.TOP_CENTER:
      return google.maps.ControlPosition.TOP_CENTER;
    case CustomControlPosition.TOP_LEFT:
      return google.maps.ControlPosition.TOP_LEFT;
    case CustomControlPosition.TOP_RIGHT:
      return google.maps.ControlPosition.TOP_RIGHT;
    default:
      return null;
  }
};
