import { SQSRecord } from "aws-lambda";

import { Command } from "../events-core";

export function decodeCommand(record: SQSRecord): Command {
  return JSON.parse(record.body);
}
