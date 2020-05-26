import { writeJson } from "https://deno.land/std/fs/mod.ts";

writeJson("./target.json", { foo: "bar" }, { spaces: 2 }); 