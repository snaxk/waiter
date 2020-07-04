import { CommandType } from "../events-core";

import { Handler, Dispatcher } from "./types";
import { createExecute } from "./execute";

export function createDispatcher(handlers: Handler[]): Dispatcher {
  const _handlers: Record<CommandType, Handler> = {};

  for (const handler of handlers) {
    _handlers[handler.type] = handler;
  }

  const execute = createExecute(_handlers);

  return { execute };
}
