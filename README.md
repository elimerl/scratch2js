# scratch2js

A [Scratch](https://scratch.mit.edu) to Javascript compiler.

## Usage

```ts
import { compile } from "scratch2js";
import { default as fetch } from "node-fetch";
fetch("https://projects.scratch.mit.edu/")
  .then((res) => res.json())
  .then((project) => {
    const compiled = compile(project);
    // do something with compiled
  });
```

## Development

```sh
git clone https://github.com/elimerl/scratch2js
cd scratch2js
yarn install
```
