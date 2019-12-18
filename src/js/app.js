/* eslint-disable class-methods-use-this */

export default class Validator {
  validateUsername(Name) {
    if (Name.search(/^[^\d_-][а-яёa-z-]+\d{0,3}[а-яёa-z-]+[^\d_-]$/i) !== -1) {
      return 'Имя корректно';
    }
    return 'Имя некорректно';
  }
}
