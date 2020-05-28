import { FlagsParser } from "./flags_parser.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import { GlobalSettings } from './global_settings.ts';

const { args } = Deno;
const app = new Application();

var flagsParser = new FlagsParser(args);
var globalSettings = GlobalSettings.GetInstance();
globalSettings.fullPath = Deno.cwd();

import(flagsParser.getImportPath() + "/settings.ts").then((settings)=>{
    globalSettings.handler = settings;
});

import(flagsParser.getImportPath() + "/urls.ts").then((urls)=>{
    app.use(urls.router.routes());
    app.listen({ port: flagsParser.getPort() });
});