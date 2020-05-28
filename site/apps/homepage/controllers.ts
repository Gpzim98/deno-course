import { RouterContext } from 'https://deno.land/x/oak/router.ts';
import denjucks from "https://deno.land/x/denjucks/mod.js";
import { GlobalSettings } from '../../../webframework/global_settings.ts';

export class HomeController
{
    get(context : RouterContext)
    {
        try {
            var glob = GlobalSettings.GetInstance();
            var fullPath = glob.fullPath + "\\apps\\homepage\\templates\\";
            denjucks.configure(fullPath);
            var myarray = ["Mary", "John", "Pedro"]
            var flag = false;
            context.response.body = denjucks.render(
                "index.html", 
                { var : "Deno Course", people: myarray, flag: flag});
        } catch (error) {
            console.log(error);
        }
    }
}