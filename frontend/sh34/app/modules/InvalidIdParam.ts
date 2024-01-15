export class InvalidIdParam extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidIdParam';
  }
}
