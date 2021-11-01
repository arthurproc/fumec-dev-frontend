export class User {
    public id: number;
    public nome: string;
    public email: string;
    public password: string;
  
    constructor()
    constructor(id?: number, nome?: string, email?: string,
        password?: string, cidade?: string) {
  
      this.id = (id)? id : 0;
      this.nome = (nome)? nome : '';
      this.email = (email)? email : '';
      this.password = (password)? password : '';
    }
  }