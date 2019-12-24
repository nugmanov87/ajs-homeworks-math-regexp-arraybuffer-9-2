import Validator from '../app';

test('Валидация пройдена', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AR4ANG3L');
  expect(received).toBe(true);
});

test('Валидация не пройдена', () => {
  const validator = new Validator();
  const received = validator.validateUsername('С3POL');
  expect(received).toBe(false);
});

test('Валидация не пройдена', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AL');
  expect(received).toBe(false);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const received = validator.validateUsername('777Ivan');
  expect(received).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const received = validator.validateUsername('IVAN777');
  expect(received).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Ivan7777');
  expect(received).toBe(false);
});

test('Кириллица', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Иван');
  expect(received).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-Ivan');
  expect(received).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Ivan_');
  expect(received).toBe(false);
});
