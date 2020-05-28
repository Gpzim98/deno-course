import { Router } from "https://deno.land/x/oak/mod.ts";
import { HomeController, AboutController } from './apps/homepage/controllers.ts';

export var router = new Router();
router
    .get("/", (context) => new HomeController().get(context))
    .get("/about", (context) => new AboutController().get(context))
    .post("/about", (context) => new AboutController().post(context));
