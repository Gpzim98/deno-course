import { RouterContext } from 'https://deno.land/x/oak/router.ts';

export class HomeController
{
    get(context : RouterContext)
    {
        context.response.body = 'Welcome to the home page';
    }
}