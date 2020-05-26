import { parse } from "https://deno.land/std/flags/mod.ts";

export class FlagsParser
{
    private port : number;

    constructor(params : string[])
    {
        var parameters = parse(params);
        this.port = parameters.port; 
    }

    getPort() : number
    {
        if(!this.port)
            this.port = 8000;
        
        return this.port;
    }
}