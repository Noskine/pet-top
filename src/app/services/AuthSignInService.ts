import { ComparePassword } from "../../lib/bcrypt";
import Employee from "../models/Employee/Employee";

interface DataTransferAuthSignService {
  email: string;
  pass: string;
}

export async function AuthSignInService({
  email,
  pass,
}: DataTransferAuthSignService) {
  const employee = await Employee.FindOne({ Email: email });

  const validPassword = ComparePassword({
    Password: pass,
    PasswordHash: <string>employee?.Password,
  });

  if (!validPassword) {
    throw new Error("senha incorreta");
  }

  return employee;
}
