import * as log from "https://deno.land/std/log/mod.ts";

// Simple default logger out of the box. You can customize it
// by overriding logger and handler named "default", or providing
// additional logger configurations
// log.debug("Hello world");
// log.info("Hello world");
// log.warning("Hello world");
// log.error("Hello world");
// log.critical("500 Internal server error");

// custom configuration with 2 loggers (the default and `tasks` loggers)
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

let logger;

// get default logger
logger = log.getLogger();
logger.debug("fizz"); // logs to `console`, because `file` handler requires "WARNING" level
logger.warning("buzz"); // logs to both `console` and `file` handlers

// get custom logger
logger = log.getLogger("tasks");
logger.debug("fizz"); // won't get output because this logger has "ERROR" level
logger.error("buzz"); // log to `console`

// if you try to use a logger that hasn't been configured
// you're good to go, it gets created automatically with level set to 0
// so no message is logged
const unknownLogger = log.getLogger("mystery");
unknownLogger.info("foobar"); // no-op