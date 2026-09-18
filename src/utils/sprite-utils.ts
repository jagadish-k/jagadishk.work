// Define the shape of a single frame
export interface SpriteFrame {
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * Generates a coordinate map for a uniform sprite sheet grid.
 * 
 * @param cols Number of columns in the sprite sheet
 * @param rows Number of rows in the sprite sheet
 * @param cellWidth The width of a single frame in pixels
 * @param cellHeight The height of a single frame in pixels
 * @returns A dictionary mapping frame indices (0 to n) to their pixel coordinates
 */
export function generateGridFrames(
  cols: number, 
  rows: number, 
  cellWidth: number, 
  cellHeight: number
): Record<number, SpriteFrame> {
  const frames: Record<number, SpriteFrame> = {};
  
  const totalFrames = cols * rows;
  for (let i = 0; i < totalFrames; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    
    frames[i] = {
      x: col * cellWidth,
      y: row * cellHeight,
      w: cellWidth,
      h: cellHeight
    };
  }
  
  return frames;
}

// Example usage assuming a 1500x1500px image (150px per frame)

