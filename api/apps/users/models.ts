import { DATA_TYPES } from 'https://deno.land/x/denodb/mod.ts';
import { BaseModel } from '../../../webframework/base_model.ts';

export class User extends BaseModel {
    static table = 'users';
    static timestamps = true;
  
    static fields = {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      name: DATA_TYPES.STRING,
      address: DATA_TYPES.STRING,
    };
}