import { serve } from "https://deno.land/std/http/server.ts";
import { FlagsParser } from "./flags_parser.ts";

const { args } = Deno;

var flagsParser = new FlagsParser(args);

const server = serve({ port: flagsParser.getPort() });
console.log("http://localhost:" + flagsParser.getPort());

function getCustomer()
{
    return "Hi, I am Deno!"
}

for await (const req of server) {
    console.log(req.url);

    if(req.url == '/customer')
        req.respond({ body: getCustomer()});
    else
        req.respond({ body: "404" });
}