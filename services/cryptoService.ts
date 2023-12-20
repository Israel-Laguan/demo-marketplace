import * as crypto from "node:crypto";
import { promisify } from "node:util";

const pbkdf2 = promisify(crypto.pbkdf2);

const secretKey = process.env.NEXTAUTH_SECRET;

if (!secretKey) {
  throw new Error("NEXTAUTH_SECRET environment variable is not set");
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = await pbkdf2(password, salt, 10000, 64, "sha512");

  return `${salt}:${hashedPassword}`;
}

export async function validatePassword(
  attemptedPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const [salt, storedHash] = hashedPassword.split(":");
  const newHash = await pbkdf2(attemptedPassword, salt, 100000, 64, "sha512");
  return newHash.toString("hex") === storedHash;
}
