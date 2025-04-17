
## API POST - Contract
- Steps 1,2,3 and 4

1- POST (adress and type)
2- PATH (person or company)
3- PATH (password)
4- PATH (adress, person or company, password)

interface User {
    email: string; // required and e-mail validation
    type: 'person' | 'company'; // required and type validation
    person: { // required for type equal person
        name: string; // required, min and max validation
        cpf: string; // required and CPF validation
        dateOfbirth: string; // required and date validation
        phone: string; // required and phone validation
    }
    company: { // required for type equal company
        name: string;// required, min and max validation
        cnpj: string; // required and CNPJ validation
        openingDate: string; // required and date validation
        phone: string; // required and phone validation
    }
    password: string; // required, min and max validation
}