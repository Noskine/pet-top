import { ComparePassword, CreateHash } from "../../../lib/bcrypt";
import Clients from "../../models/Clients/Clients";
import Employee from "../../models/Employee/Employee";

class AuthApiService {
  async employeeSign_in({ email, pass }: { email: string; pass: string }) {
    const employee = await Employee.FindOne({ Email: email });

    const validPassword = ComparePassword({
      Password: pass,
      PasswordHash: <string>employee?.Password,
    });

    if (!validPassword) {
      throw new Error("sen");
    }

    return employee;
  }

  async clientSign_in({ email, pass }: { email: string; pass: string }) {
    const client = await Clients.findByEmail({ email });

    if (!client) {
      throw new Error("clinet neo exits");
    }

    const validPassword = ComparePassword({
      Password: pass,
      PasswordHash: <string>client?.Password,
    });

    if (!validPassword) {
      throw new Error("sen");
    }

    return client;
  }

  async createClientService({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    const pass = CreateHash(password);

    const client = await Clients.create({ email, pass, name });

    return client;
  }
}

export default new AuthApiService();
