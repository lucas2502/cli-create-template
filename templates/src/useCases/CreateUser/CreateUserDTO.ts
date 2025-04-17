export namespace CreateUserDTO {
  export interface Input {
    email: string;
    password: string;
    type: "person" | "company";
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
  }
  export type Output = boolean | Error;
}
