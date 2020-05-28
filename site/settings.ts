import { Flight, NewModel } from './apps/homepage/models.ts'; 

export var config = {
    projectname: "My site",
    db_setup: {
        engine: 'sqlite3',
        database: 'sitedb3.sqlite3'
    },
    models: [
        Flight,
        NewModel
    ]
}