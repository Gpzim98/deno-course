import { Database } from "https://deno.land/x/denodb/lib/database.ts";
import { GlobalSettings } from "./global_settings.ts";

export class DBSetup
{
    static GetDB()
    {
        var globalSettings = GlobalSettings.GetInstance();
        let dbsettings = globalSettings.handler.config.db_setup;
        switch (dbsettings.engine)
        {
            case 'sqlite3':
                var dbPath = globalSettings.fullPath + '/' + dbsettings.database;            
                return new Database(dbsettings.engine, {
                    filepath: dbPath,
                });
            default:
                throw new Error('Not possible to instanciate a DB connection');
        }
    }

    static async setupDb()
    {
        const db = this.GetDB();
        var globalSettings = GlobalSettings.GetInstance();
        db.link(globalSettings.handler.config.models);
        await db.sync({ drop: true});
        await db.close();
        console.log('DB synced successfully');
    }
}
