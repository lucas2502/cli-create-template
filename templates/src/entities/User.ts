import { v4 as uuid } from "uuid";

export class User {
  id?: string;
  email: string;
  type: "person" | "company";
  password: string;
  person?: {
    name: string;
    cpf: string;
    dateOfbirth: string;
    phone: string;
  };
  company?: {
    name: string;
    cnpj: string;
    openingDate: string;
    phone: string;
  };

  constructor(props: User) {
    const { email, type, password, person, company, id } = props;

    this.email = email;
    this.type = type;
    this.password = Buffer.from(password, "binary").toString("base64");
    this.person = person;
    this.company = company;
    this.id = id || uuid();
  }
}
