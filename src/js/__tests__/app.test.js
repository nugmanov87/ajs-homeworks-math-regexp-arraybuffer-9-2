import Validator from '../app';

test('Проверка правильного имени', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('Иван Петров-Водкин');
  expect(received).toBe(expected);
});

test('Проверка имени c двумя пробелами', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('Иван  Петров');
  expect(received).toBe(expected);
});

test('Проверка имени c пробелами в начале', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername(' Иван Петров');
  expect(received).toBe(expected);
});

test('Проверка имени с цифрами', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('Ива0н Петров');
  expect(received).toBe(expected);
});

test('Проверка имени со знаками', () => {
  const expected = 'Имя некорректно';
  const validator = new Validator();
  const received = validator.validateUsername('Ива!@н Петров');
  expect(received).toBe(expected);
});

test('Проверка валидации более трёх цифр Иванов7777Петров', () => {
  const expected = 'Имя некорректно';
  const received = new Validator();
  expect(received.validateUsername('Иванов7777Петров')).toBe(expected);
});
