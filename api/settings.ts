import { User } from './apps/users/models.ts'; 

export var config = {
    projectname: "My Deno API",
    db_setup: {
        database: 'deno_api',
        engine: 'postgres',
        username: 'postgres',
        password: 'deno',
        host: 'localhost',
    },
    models: [
        User,
    ],
}