import { ensureFile, ensureFileSync } from "https://deno.land/std/fs/mod.ts";

ensureFile("data/targetFile.dat"); // returns promise
