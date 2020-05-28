import { DATA_TYPES } from 'https://deno.land/x/denodb/mod.ts';
import { BaseModel } from '../../../webframework/base_model.ts';

export class Flight extends BaseModel {
    static table = 'flights';
    static timestamps = true;
  
    static fields = {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      departure: DATA_TYPES.STRING,
      destination: DATA_TYPES.STRING,
      flightDuration: DATA_TYPES.FLOAT,
    };
  
    static defaults = {
      flightDuration: 2.5,
    };
}

export class NewModel extends BaseModel {
    static table = 'newtable';
    static timestamps = true;
  
    static fields = {
      id: {
        primaryKey: true,
        autoIncrement: true,
      },
      departure: DATA_TYPES.STRING,
      destination: DATA_TYPES.STRING,
      flightDuration: DATA_TYPES.FLOAT,
    };
  
    static defaults = {
      flightDuration: 2.5,
    };
}
