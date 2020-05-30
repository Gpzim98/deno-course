import { RouterContext } from 'https://deno.land/x/oak/router.ts';
import { ControllerBase } from '../../../webframework/controller_base.ts';
import { User } from './models.ts';

export class UsersController extends ControllerBase
{
    async get(context : RouterContext)
    {
        try {
            context.response.body = await User.getAll(User);
        } catch (error) {
            console.log(error);
            context.response.body = "There a problem processing the requst, plese try again";
        }
    }

    async post(context : RouterContext)
    {          
        var body = await context.request.body();      
        var form = new URLSearchParams(body.value);  

        await User.save(User, 
            { 
                name: form.get('name'),
                address: form.get('address'),
            }, 
        );

        context.response.body = 'User saved successfully';
    }

    
    async put(context: RouterContext)
    {        
        try {
            var body = await context.request.body();      
            var form = new URLSearchParams(body.value);  

            var data = {
                name: form.get('name'),
                address: form.get('address'),
            }
            var id = context.params.id;
            
            if(id)
                await User.updateModel(User, id, data);
                context.response.body = "Users updated successfully";
        } catch (error) {
            console.log(error);
            context.response.body = "There was an error when updating a user"
        }
    }

    async getById(context: RouterContext)
    {
        var id = context.params.id;

        try {
            if (id)
                var resp = await User.getModelById(User, id);
            else
                context.response.body = "ID is required";
                        
            context.response.body = resp;
        } catch (error) {
            console.log(error);
            context.response.body = "There a problem processing the requst, plese try again";
        }
    }

    async deleteUser(context: RouterContext)
    {        
        try {
            var id = context.params.id;
            if(id)
                await User.deleteModel(User, id);
            context.response.body = "User deleted successfully"
        } catch (error) {
            context.response.body = "There was an error when trying to delete a user"
        }
    }
}