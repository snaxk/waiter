import { Command, CommandType } from "../events-core";
import { log } from "../log";
import { OrderCommand } from "../commands";
import { Handler } from "./types";

export function createExecute(handlers: Record<CommandType, Handler>) {
  return async function execute(command: Command): Promise<void> {
    const { action } = handlers[command.type];

    try {
      await action((command as unknown) as OrderCommand);
    } catch (e) {
      log.withFields({ error: e.message, stack: e.stack }).error("oh snap!");
    }
  };
}
