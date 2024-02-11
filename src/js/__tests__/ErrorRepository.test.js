import ErrorRepository from '../ErrorRepository';

test('ErrorRepository 1', () => {
  const errors = new ErrorRepository();
  const result = errors.translate(23);
  expect(result).toEqual('Unknown error');
});

test('ErrorRepository 2', () => {
  const errors = new ErrorRepository();
  const result = errors.translate(1);
  expect(result).toEqual('Ошибка 1');
});
