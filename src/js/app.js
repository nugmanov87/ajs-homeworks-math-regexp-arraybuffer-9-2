/* eslint-disable class-methods-use-this */

export default class Validator {
  validateUsername(name) {
    this.name = name;
    return this.name.search(/^[^\d_-]([a-z_-]\d{0,3})+[^\d_-]$/i) !== -1;
  }
}
