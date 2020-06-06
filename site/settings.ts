import { Flight, NewModel } from './apps/homepage/models.ts'; 

export var config = {
    projectname: "My site",
    db_setup: {
        engine: 'sqlite3',
        database: 'sitedb3.sqlite3'
    },
    // db_setup: {
    //     database: 'denodb',
    //     engine: 'postgres',
    //     username: 'postgres',
    //     password: 'deno',
    //     host: 'localhost',
    // },
    models: [
        Flight,
        NewModel
    ],
    static_folder: 'static',
    static_url: 'http://51.143.176.92:8001/'
}