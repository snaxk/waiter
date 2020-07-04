import { placeOrder } from "./place-order";

export const handlers = [
  {
    type: "order:place",
    action: placeOrder,
  },
];
