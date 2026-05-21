export function isStrongPassword(password: string) {
  const passwordExpression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const RegEx = new RegExp(passwordExpression);
  return RegEx.test(password);
}

export function isEmail(email: string): boolean {
  const expression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regEx = new RegExp(expression);
  return regEx.test(email);
}

