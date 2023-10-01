export class Guard {
  static IsNotNull<T>(data: T, message: string): void {
    if (data === null) {
      throw new Error(message);
    }
  }
}
