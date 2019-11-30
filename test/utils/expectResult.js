module.exports = ({ isError, value }, expectedResult) => {
  expect(isError).toBeFalsy();
  expect(value).toBe(expectedResult);
};
