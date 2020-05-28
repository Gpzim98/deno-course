import denjucks from "https://deno.land/x/denjucks/mod.js";
import { GlobalSettings } from './global_settings.ts';

export class ControllerBase
{
    renderTemplate(appname: string, templatename : string, data : any)
    {
        var globalSettings = GlobalSettings.GetInstance();
        var fullPath = globalSettings.fullPath + `\\apps\\${appname}\\templates\\`;
        denjucks.configure(fullPath);
        return denjucks.render(templatename, data);
    }
}