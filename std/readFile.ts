import { readFileStr } from "https://deno.land/std/fs/mod.ts";

readFileStr("./myfile.txt", { encoding: "utf8" }).then((res) =>{
    console.log(res);
});
