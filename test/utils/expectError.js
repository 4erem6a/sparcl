module.exports = ({ isError, error }, expectedError = undefined) => {
  expect(isError).toBeTruthy();
  if (expectedError) {
    expect(value).toContain(expectedError);
  }
};
