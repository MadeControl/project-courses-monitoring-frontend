import { Component, OnInit } from '@angular/core';
import {UsernamePassword} from '../../../model/username-password.model';
import {AuthenticationService} from '../../../service/authentication.service';
import {TokenHolderService} from '../../../security/token-holder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private credentials!: UsernamePassword;

  constructor(private authenticationService: AuthenticationService,
              private tokenHolderService: TokenHolderService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenHolderService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenHolderService.getAuthorities();
    }
  }

  onSubmit(): void {
    this.credentials = { username: this.form.username, password: btoa(this.form.password) };

    this.authenticationService.attemptAuth(this.credentials).subscribe(
      data => {
        this.tokenHolderService.saveToken(data.token);
        this.tokenHolderService.saveUsername(data.username);
        this.tokenHolderService.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenHolderService.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    this.router.navigate(['/']).then();
  }
}
