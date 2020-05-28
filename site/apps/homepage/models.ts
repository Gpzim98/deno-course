import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts';

export class Flight extends Model {
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

export class NewModel extends Model {
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
