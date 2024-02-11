export default class ErrorRepository {
  constructor() {
    this.codes = new Map();

    this.codes.set(1, 'Ошибка 1');
    this.codes.set(2, 'Ошибка 2');
  }

  translate(code) {
    if (this.codes.has(code)) return this.codes.get(code);

    return 'Unknown error';
  }
}
