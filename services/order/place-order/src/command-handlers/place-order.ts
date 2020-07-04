import { log } from "../log";
import { OrderCommand } from "../commands";

export async function placeOrder(command: OrderCommand): Promise<void> {
  log.withFields(command).debug("Placing an order!");
}
