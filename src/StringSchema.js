export default class StringSchema {
  validators = [(value) => typeof value === 'string'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  startsFromUpperCase() {
    const evilChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '?', ' '];
    const validator = (string) => string.length !== 0
      && !evilChars.includes(string[0])
      && string[0].toUpperCase() === string[0];
    this.validators.push(validator);
    return this;
  }

  length(value) {
    const validator = (string) => string.length === value;
    this.validators.push(validator);
    return this;
  }

  hasExclamation() {
    const validator = (string) => string.includes('!');
    this.validators.push(validator);
    return this;
  }
}
