/* eslint-disable class-methods-use-this */

export default class Validator {
  validateUsername(Name) {
    if (Name.search(/^[[а-яёa-z-]+([ ]?[[а-яёa-z-])*$/i) !== -1) {
      return 'Имя корректно';
    }
    return 'Имя некорректно';
  }
}
