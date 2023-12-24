import * as crypto from "node:crypto";
import { promisify } from "node:util";

const pbkdf2 = promisify(crypto.pbkdf2);

const SALT_LENGTH = 16;
const HASH_ITERATIONS = 10000;
const HASH_ALGORITHM = "sha512";

/**
 * Hashes the password using PBKDF2 with a random salt.
 * @param password - The password to hash.
 * @returns A string containing the salt and hashed password.
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(SALT_LENGTH).toString("base64");
  const hashedPassword = await pbkdf2(
    password,
    Buffer.from(salt, "base64"),
    HASH_ITERATIONS,
    64, // 64 bytes is 512 bits
    HASH_ALGORITHM
  );

  return `${salt}:${hashedPassword.toString("base64")}`;
}

/**
 * Validates a password against a hashed password.
 * @param attemptedPassword - The password to validate.
 * @param hashedPassword - The stored hashed password.
 * @returns A boolean indicating whether the password is valid.
 */
export async function validatePassword(
  attemptedPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const [salt, storedHash] = hashedPassword.split(":");
  const newHash = await pbkdf2(
    attemptedPassword,
    Buffer.from(salt, "base64"),
    HASH_ITERATIONS,
    64,
    HASH_ALGORITHM
  );

  const passwordComparison = newHash.toString("base64") === storedHash;

  if (!passwordComparison)
    console.error({ attempted: newHash.toString("base64"), storedHash });
  return passwordComparison;
}
