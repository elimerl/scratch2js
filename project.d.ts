interface SB3Project {
  targets: SB3Target[];
  monitors: SB3Watcher[];
  meta: any;
}

export interface SB3Target {
  name: string;
  isStage: boolean;
  sounds: SB3Sound[];
  costumes: SB3Costume[];
  draggable: boolean;
  size: number;
  direction: number;
  visible: boolean;
  x: number;
  y: number;
  currentCostume: number;
  rotationStyle: string;
  layerOrder: number;
  lists: ObjectMap<SB3List>;
  variables: ObjectMap<SB3Variable>;
  blocks: ObjectMap<SB3Block>;
  broadcasts: ObjectMap<string>;
}

interface SB3Costume {
  /**
   * The ID of the asset. Should be its md5sum.
   * Example: "b61b1077b0ea1931abee9dbbfa7903ff"
   */
  assetId: string;
  name: string;
  /**
   * "Real pixels per image pixel"
   */
  bitmapResolution: number;
  /**
   * The ID of the asset with its extension.
   * Example: "b61b1077b0ea1931abee9dbbfa7903ff.png"
   */
  md5ext: string;
  /**
   * The format of the image.
   * Usually "png" or "svg"
   */
  dataFormat: string;
  rotationCenterX: number;
  rotationCenterY: number;
}

interface SB3Sound {
  assetId: string;
  name: string;
  dataFormat: string;
  format: string;
  rate: number;
  sampleCount: number;
  md5ext: string;
}

export interface SB3Block {
  opcode: string;
  topLevel: boolean;
  inputs: ObjectMap<any>;
  fields: ObjectMap<any>;
  mutation: any;
  parent: string | null;
  next: string | null;
}

interface SB3Watcher {
  spriteName: string | null;
  visible: boolean;
  id: string;
  opcode: string;
  mode: string;
  params: any;
  x: number;
  y: number;
  sliderMin?: number;
  sliderMax?: number;
  width?: number;
  height?: number;
  isDiscrete: boolean;
}

/**
 * Tuple of name, value
 */
type SB3List = [string, any[]];

/**
 * Tuple of name, value, and sometimes cloud.
 */
type SB3Variable = [string, any, boolean?];
interface ObjectMap<V> {
  [key: string]: V;
}
