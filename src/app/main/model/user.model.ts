export class User {
  id!: number;
  email: string;
  password!: string;
  firstname: string;
  lastname: string;
  role!: string;
  enabled!: boolean;


  constructor(email: string, password: string, firstname: string, lastname: string) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
