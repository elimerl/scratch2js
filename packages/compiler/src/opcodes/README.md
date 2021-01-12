This folder houses the scratch-to-AST generators. They are sorted into files based on the opcode type; e.g. `events_onflagclicked` will go into the `events.ts` file.

# Writing a handler

Each file should have one exported default function that returns an array of ESTree `Node`s. An example would be this:

```ts
import { Node } from "estree";
import { SB3Block, SB3Target } from "../project";

function handle(block: SB3Block, target: SB3Target): Node[] {
  // i need to write this lol
  return [];
}
export default handle;

function handle(block: SB3Block, target: SB3Target) {
  return [];
}
export default handle;
```
