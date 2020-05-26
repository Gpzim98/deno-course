import { FlagsParser } from "./flags_parser.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "../site/urls.ts";

const { args } = Deno;

var flagsParser = new FlagsParser(args);

console.log("http://localhost:" + flagsParser.getPort());

const app = new Application();
app.use(router.routes());
console.log(flagsParser.getPort());

await app.listen({ port: flagsParser.getPort() });