import { Router } from "https://deno.land/x/oak/mod.ts";
import { HomeController } from './apps/homepage/controllers.ts';

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Author",
});

export var router = new Router();
router
    .get("/", (context) => new HomeController().get(context))
    .get("/book", (context) => {
        context.response.body = Array.from(books.values());
    })
    .get("/book/:id", (context) => {
        if (context.params && context.params.id && books.has(context.params.id)) {
        context.response.body = books.get(context.params.id);
    }
});
