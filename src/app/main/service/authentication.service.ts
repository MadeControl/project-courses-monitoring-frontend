import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UsernamePassword} from '../model/username-password.model';
import {Observable} from 'rxjs';
import {Token} from '../model/token.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private loginURL = `${environment.url}/login`;

  attemptAuth(credentials: UsernamePassword): Observable<Token> {
    return this.http.post<Token>(this.loginURL, credentials, httpOptions);
  }
}
