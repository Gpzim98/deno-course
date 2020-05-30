import { Router } from "https://deno.land/x/oak/mod.ts";
import { HomeController, AboutController } from './apps/homepage/controllers.ts';

export var router = new Router();
router
    .get("/", (context) => new HomeController().get(context))
    .get("/:id", (context) => new HomeController().getById(context))
    .get("/about", (context) => new AboutController().get(context))
    .post("/about", (context) => new AboutController().post(context))
    
    .get("/newflight", (context) => new HomeController().newFlightGet(context))
    .post("/newflight", (context) => new HomeController().post(context));