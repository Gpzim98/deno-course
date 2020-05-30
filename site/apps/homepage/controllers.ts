import { RouterContext } from 'https://deno.land/x/oak/router.ts';
import { ControllerBase } from '../../../webframework/controller_base.ts';
import { DBSetup } from '../../../webframework/dbsetup.ts';
import { Flight } from './models.ts';

export class HomeController extends ControllerBase
{
    async get(context : RouterContext)
    {
        try {
            var resp = await Flight.getAll(Flight);
            
            var data = {
                var: "Deno",
                flights: resp,
                flag: true
            }
            context.response.body = this.renderTemplate(
                "homepage", "index.html", data);
        } catch (error) {
            console.log(error);
            context.response.body = "There a problem processing the requst, plese try again";
        }
    }

    async getById(context: RouterContext)
    {
        var id = context.params.id;

        try {
            if (id)
                var resp = await Flight.getModelById(Flight, id);
            else
                context.response.body = "ID is required";
            
            console.log(resp);
            
            context.response.body = this.renderTemplate(
                "homepage", "flight.html", { flights: resp});
        } catch (error) {
            console.log(error);
            context.response.body = "There a problem processing the requst, plese try again";
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