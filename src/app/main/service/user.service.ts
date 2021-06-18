import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = `${environment.url}/users`;

  constructor(private http: HttpClient) {
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url);
  }

  // updateUser(user: User) {
  //   const url = `${this.url}`;
  //   return this.http.put(url, body);
  // }

  createUser(user: User): Observable<any> {
    const url = `${this.usersURL}`;
    return this.http.post(url, user);
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    const url = `${this.usersURL}/email/${email}`;
    return this.http.get<boolean>(url);
  }

}
