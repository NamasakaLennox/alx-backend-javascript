import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* getter methods */
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  /**
   * @param {Number} amount
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * @param {Currency} currency
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || conversionRate !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
