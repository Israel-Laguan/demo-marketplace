import { hashPassword, validatePassword } from './cryptoService';

describe('Password Utils Tests', () => {
  it('should hash and validate passwords correctly', async () => {
    const password = 'superSecretPassword';
    const hashedPassword = await hashPassword(password);

    // Ensure hashed password is not the same as the original password
    expect(hashedPassword).not.toEqual(password);

    // Ensure validatePassword returns true for correct password
    const isValid = await validatePassword(password, hashedPassword);
    expect(isValid).toBe(true);

    // Ensure validatePassword returns false for incorrect password
    const isInvalid = await validatePassword('wrongPassword', hashedPassword);
    expect(isInvalid).toBe(false);
  });
});