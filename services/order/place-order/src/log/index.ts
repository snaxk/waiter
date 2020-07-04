import { Logger } from "./logger";

const _log = new Logger();

export const log = {
  withFields: (fields: Record<string, any>): Logger => {
    return _log.withFields(fields);
  },

  debug: (message: string): void => {
    _log.debug(message);
  },

  error: (message: string): void => {
    _log.error(message);
  },
};
