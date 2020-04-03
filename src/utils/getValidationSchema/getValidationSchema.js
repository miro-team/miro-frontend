import * as Yup from 'yup';


Yup.addMethod(Yup.number, 'notZero', function notZero(message) {
  return this.test('Value does not equal 0', message, value => Number(value) > 0);
});

Yup.addMethod(Yup.mixed, 'containsDigitAndUppercase', function containsDigitAndUppercase(message) {
  return this.test(
    'Digit and uppercase validation',
    message,
    (value = '') => value.toLowerCase() !== value && /\d/.test(value),
  );
});

Yup.addMethod(Yup.mixed, 'eightOrMore', function eightOrMore(message) {
  return this.test('Eight or more symbols', message, (value = '') => value.length >= 8);
});

function getValidationSchema(schemaName) {
  const schemas = {
    login: {
      username: Yup.string().required('Это поле должно быть заполнено!'),
      password: Yup.string().required('Это поле должно быть заполнено!'),
    },
  };

  if (!schemas[schemaName]) throw new Error(`${schemaName} схема для валидации не найдена.`);
  return Yup.object().shape(schemas[schemaName]);
}

export default getValidationSchema;
