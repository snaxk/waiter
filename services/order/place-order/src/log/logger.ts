function fmt(fields: Record<string, any>, message: string): string {
  return JSON.stringify({ ...fields, message });
}

export class Logger {
  constructor(private fields: Record<string, any> = {}) {}

  withFields(fields: Record<string, any>): Logger {
    return new Logger({
      ...this.fields,
      ...fields,
    });
  }

  debug(message: string): void {
    console.debug(fmt(this.fields, message));
  }

  error(message: string): void {
    console.error(fmt(this.fields, message));
  }
}
