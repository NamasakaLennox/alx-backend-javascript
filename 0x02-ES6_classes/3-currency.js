export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /* getter methods */
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  /* setter methods */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
