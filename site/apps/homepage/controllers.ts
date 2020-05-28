import { RouterContext } from 'https://deno.land/x/oak/router.ts';
import { ControllerBase } from '../../../webframework/controller_base.ts';
import { DBSetup } from '../../../webframework/dbsetup.ts';
import { Flight } from './models.ts';

export class HomeController extends ControllerBase
{
    async get(context : RouterContext)
    {
        try {
            var db = DBSetup.GetDB();
            db.link([Flight]);
            var resp = await Flight.all();
            db.close();
            
            var data = {
                var: "Deno",
                flights: resp,
                flag: true
            }
            context.response.body = this.renderTemplate(
                "homepage", "index.html", data);
        } catch (error) {
            console.log(error);
        }
    }
}

export class AboutController extends ControllerBase
{
    get(context : RouterContext)
    {
        try {
            context.response.body = this.renderTemplate(
                "homepage", "about.html", null);
        } catch (error) {
            console.log(error);
        }
    }

    post(context : RouterContext)
    {
        try {
            context.response.body = "Post page"
        } catch (error) {
            console.log(error);
        }
    }
}