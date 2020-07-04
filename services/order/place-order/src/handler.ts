import { SQSEvent, SQSRecord, SQSHandler } from "aws-lambda";

import { log } from "./log";
import { handlers } from "./command-handlers";
import { createDispatcher } from "./dispatcher";
import { decodeCommand } from "./utilities";

export function create(): SQSHandler {
  const dispatcher = createDispatcher(handlers);

  async function process(record: SQSRecord) {
    log.withFields({ record }).debug("processing event");

    try {
      const command = decodeCommand(record);

      log.withFields({ command }).debug("executing");

      await dispatcher.execute(command);

      log.withFields({ executed: command }).debug("execution complete");
    } catch (e) {
      log
        .withFields({ error: e.message, stack: e.stack })
        .error("failed to process");
    }
  }

  return async (event: SQSEvent) => {
    // NOTE do we want all of them to fail if one fails?
    await Promise.all(event.Records.map(process));
  };
}
