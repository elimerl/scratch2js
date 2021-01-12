import { Program, Node as ESNode } from "estree";
import { generate } from "escodegen";

const program: Program = {
  type: "Program",
  sourceType: "module",
  body: [
    {
      type: "VariableDeclaration",
      kind: "var",
      declarations: [
        {
          type: "VariableDeclarator",
          id: { type: "Identifier", name: "a" },
          init: { value: 1, type: "Literal" },
        },
      ],
    },
  ],
};
console.log(program, generate(program));
