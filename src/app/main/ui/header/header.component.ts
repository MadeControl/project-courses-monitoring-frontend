import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenHolderService} from '../../security/token-holder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShowProfile = false;

  constructor(private router: Router, private tokenHolderService: TokenHolderService) { }

  ngOnInit(): void {
  }

  routeToLoginForm(): void {
    this.router.navigate(['/login']).then();
  }

  routeToRegistryForm(): void {
    this.router.navigate(['/registry']).then();
  }

  logOut(): void {
    this.tokenHolderService.signOut();
    this.router.navigate(['/']).then();
  }

  isAuthenticated(): boolean {
    return this.tokenHolderService.isAuthenticated();
  }

  showProfile(): void {
    this.isShowProfile = true;
  }

  hideProfile(): void {
    this.isShowProfile = false;
  }

}
