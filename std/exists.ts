import { exists } from "https://deno.land/std/fs/mod.ts";

exists("data").then((resp) =>{
    console.log(resp);
    
}); // returns a Promise<boolean>