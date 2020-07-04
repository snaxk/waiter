export type Payload = Record<any, any>;

export type EntityID = {
  id: string;
  type: string;
};

export type CommandType = string;

export type Command<
  C extends CommandType = CommandType,
  P extends Payload = Payload
> = {
  type: C;
  target: EntityID;
  payload: P;
};
