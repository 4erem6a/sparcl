expect.extend({
  toMatchResult(receiver, input, expectedResult) {
    const { isError, value } = receiver.parse(input);

    expect(isError).toBeFalsy();
    expect(value).toEqual(expectedResult);

    return { pass: true };
  },
  toMatchError(receiver, input, expectedError) {
    const { isError, error } = receiver.parse(input);

    expect(isError).toBeTruthy();

    if (typeof expectedError == "string") {
      expect(error.message).toContain(expectedError);
    } else if (expectedError instanceof RegExp) {
      expect(error.message).toMatch(expectedError);
    }

    return { pass: true };
  }
});
