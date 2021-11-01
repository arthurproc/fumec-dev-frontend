import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  public getAuthUser(user: User): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users?email='+user.email+'&password='+user.password);
  }
}
