import { RouterContext } from 'https://deno.land/x/oak/router.ts';
import denjucks from "https://deno.land/x/denjucks/mod.js";

export class HomeController
{
    get(context : RouterContext)
    {
        try {
            var base = Deno.cwd();
            var fullPath = base + "\\site\\apps\\homepage\\templates\\";
            denjucks.configure(fullPath);
            var myarray = ["Mary", "John", "Pedro"]
            var flag = true;
            context.response.body = denjucks.render(
                "index.html", 
                { var : "Deno Course", people: myarray, flag: flag});
        } catch (error) {
            console.log(error);
        }
    }
}