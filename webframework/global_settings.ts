export class GlobalSettings
{
    private static INSTANCE : GlobalSettings;
    public handler : any;
    public fullPath : string = "";

    private constructor() {}

    public static GetInstance() : GlobalSettings
    {
        if(!GlobalSettings.INSTANCE)
            GlobalSettings.INSTANCE = new GlobalSettings();

        return GlobalSettings.INSTANCE;
    }
}