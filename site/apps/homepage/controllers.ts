import { RouterContext } from 'https://deno.land/x/oak/router.ts';
import { ControllerBase } from '../../../webframework/controller_base.ts';

export class HomeController extends ControllerBase
{
    get(context : RouterContext)
    {
        try {
            var data = {
                var: "Deno",
                people: ["Mary", "John", "Rick"],
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