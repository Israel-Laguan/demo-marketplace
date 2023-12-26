import { prisma } from "@/prisma/queries";
import { authenticate } from "./authService";
import { validatePassword } from "./cryptoService";

jest.mock("@/prisma/queries", () => ({
  prisma: {
    user: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  },
}));

jest.mock("./cryptoService", () => ({
  validatePassword: jest.fn(),
}));

describe("Authentication", () => {
  it("should authenticate user", async () => {
    const mockUser = {
      id: "1",
      email: "test@example.com",
      password: "hashed_password",
    };

    (prisma.user.findMany as jest.Mock).mockResolvedValue([mockUser]);

    (validatePassword as jest.Mock).mockResolvedValue(true);

    const result = await authenticate("test@example.com", "password");

    // Assertions
    expect(result).toEqual({ user: mockUser });

    // Wait for prisma.$disconnect to complete
    await new Promise(resolve => process.nextTick(resolve));

    // Verify that prisma.$disconnect is called
    expect(prisma.$disconnect).toHaveBeenCalled();
  });

  it("should return null if no user is found", async () => {
    (prisma.user.findMany as jest.Mock).mockResolvedValue([]);

    const result = await authenticate("nonexistent@example.com", "password");

    expect(result).toBeNull();
    await new Promise(resolve => process.nextTick(resolve));
    expect(prisma.$disconnect).toHaveBeenCalled();
  });

  it("should return null if password is invalid", async () => {
    (prisma.user.findMany as jest.Mock).mockResolvedValue([{
      id: "1",
      email: "test@example.com",
      password: "hashed_password",
    }]);

    // Mocking validatePassword
    (validatePassword as jest.Mock).mockResolvedValue(false);

    const result = await authenticate("test@example.com", "invalid_password");

    expect(result).toBeNull();
    await new Promise(resolve => process.nextTick(resolve));
    expect(prisma.$disconnect).toHaveBeenCalled();
  });

  it("should throw an error on unexpected error", async () => {
    (prisma.user.findMany as jest.Mock).mockRejectedValue(new Error("Unexpected error"));

    await expect(authenticate("test@example.com", "password")).rejects.toThrow("Authentication failed");
    await new Promise(resolve => process.nextTick(resolve));
    expect(prisma.$disconnect).toHaveBeenCalled();
  });
});
