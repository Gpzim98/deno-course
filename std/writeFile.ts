import { writeFileStr } from "https://deno.land/std/fs/mod.ts";
  
writeFileStr("./myfile.dat", "file content").then((res)=>{
    console.log('File created!');
});
