import { Application, send } from "https://deno.land/x/oak/mod.ts";
import { FlagsParser } from "./flags_parser.ts";
import { GlobalSettings } from "./global_settings.ts";

const app = new Application();
const { args } = Deno;

var flagsParser = new FlagsParser(args);
var globalSettings = GlobalSettings.GetInstance();
globalSettings.fullPath = Deno.cwd();

import(flagsParser.getImportPath() + "/settings.ts").then((settings)=>{
  globalSettings.handler = settings;

  var server_path = globalSettings.fullPath + '/' + globalSettings.handler.config.static_folder;
  console.log(server_path);
  
  app.use(async (context) => {
      await send(context, context.request.url.pathname, {
        root: server_path,
        index: "index.html",
      });
  });

  app.listen({ port: flagsParser.getPort() });
});
