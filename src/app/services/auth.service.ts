import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticate: boolean = false;

  constructor(private router: Router,
              private usersService: UsersService) {}

  public login(user: User) {

    this.usersService.getAuthUser(user).subscribe(
      (usuarioAuth: User[])=>{

      const [user] = usuarioAuth;

      if (user.email) {
        this.authenticate = true;
        console.log('Aqui Teste!');
        this.router.navigate(['/dashboard']);
      }
    });
  }

  public isAuth(): boolean {
    return this.authenticate;
  }
}