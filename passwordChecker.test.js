const passwordChecker = require('./passwordChecker');

test('Un mot de passe avec moins de 8 caractères échoue', () => {
    expect(passwordChecker('1234567')).toBe(false);
});

test('Un mot de passe sans caractère spécial échoue', () => {
    expect(passwordChecker('Password1')).toBe(false);
});

test('Un mot de passe sans chiffre échoue', () => {
    expect(passwordChecker('Password!')).toBe(false);
});

test('Un mot de passe contenant "IPL" échoue', () => {
    expect(passwordChecker('IPL123!')).toBe(false);
});

test('Un mot de passe valide passe', () => {
    expect(passwordChecker('Valid1!')).toBe(true);
});
