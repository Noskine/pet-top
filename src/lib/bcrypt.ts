import { compareSync, hashSync } from "bcryptjs";

interface CompareData {
  Password: string;
  PasswordHash: string;
}

export function CreateHash(password: string) {
  return hashSync(password, 10);
}

export function ComparePassword({ Password, PasswordHash }: CompareData) {
  return compareSync(Password, PasswordHash);
}
