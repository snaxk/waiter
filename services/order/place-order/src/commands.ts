/* eslint-disable @typescript-eslint/ban-types */
import { Command } from "./events-core";

function isT<C extends OrderCommand>(type: OrderCommandType) {
  return (command: OrderCommand): command is C => {
    return command.type === type;
  };
}

export enum OrderCommandType {
  placeOrder = "order:place",
}

export type PlaceOrder = Command<OrderCommandType.placeOrder, {}>;

export const isPlaceOrder = isT<PlaceOrder>(OrderCommandType.placeOrder);

export type OrderCommand = PlaceOrder;
