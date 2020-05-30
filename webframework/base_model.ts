import { Model } from 'https://deno.land/x/denodb/lib/model.ts';
import { DBSetup } from "./dbsetup.ts";

export class BaseModel extends Model 
{
    static async getAll(model : any)
    {
        var db = DBSetup.GetDB();
        db.link([model]);
        var resp = await model.all();
        db.close();
        return resp;
    }

    static async getModelById(model : any, id : string)
    {
        var db = DBSetup.GetDB();
        db.link([model]);
        var resp = await model.where('id', id).get();
        db.close();
        return resp;
    }
  
    static async save(model : any, data : any)
    {
        var db = DBSetup.GetDB();
        db.link([model]);
        await model.create(data);
        db.close();
    }

  static async deleteModel(model : any, id : string)
  {
      var db = DBSetup.GetDB();
      db.link([model]);
      await model.deleteById(id);
      db.close();
  }
}