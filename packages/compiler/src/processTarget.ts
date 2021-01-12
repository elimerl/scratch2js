import { Node } from "estree";
import { SB3Block, SB3Target } from "./project";
import * as libs from "./libs";
export function processTarget(target: SB3Target): Node[] {
  let nodeArr = [];
  Object.values(target.blocks).forEach((block) => {
    const blockSplit = block.opcode.split("_");
    const library = blockSplit[0];
    nodeArr.push(...libs[library](block, target));
  });
  return nodeArr;
}
