import { componentize } from "@bytecodealliance/componentize-js";
import { readFile, writeFile } from "node:fs/promises";

const jsSource = await readFile("hello.js", "utf8");
const witSource = await readFile("hello.wit", "utf8");
const options = {
  enableStdout: true,
};

const { component } = await componentize(jsSource, witSource, options);

await writeFile("hello.component.wasm", component);
