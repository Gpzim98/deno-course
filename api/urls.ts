import { Router } from "https://deno.land/x/oak/mod.ts";
import { UsersController } from './apps/users/controllers.ts';

export var router = new Router();
router
    .get("/users", (context) => new UsersController().get(context))
    .get("/users/:id", (context) => new UsersController().getById(context))
    .post("/users", (context) => new UsersController().post(context))
    .put("/users/:id", (context) => new UsersController().put(context))
    .delete("/users/:id", (context) => new UsersController().deleteUser(context));