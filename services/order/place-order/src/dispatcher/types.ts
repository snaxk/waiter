import { CommandType, Command, Payload } from "../events-core";
import { OrderCommand } from "../commands";

export type Dispatcher = {
  execute: (command: Command<CommandType, Payload>) => Promise<void>;
};

export type Handler = {
  type: CommandType;
  action: (command: OrderCommand) => Promise<void>;
};
