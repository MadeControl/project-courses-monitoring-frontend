import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user.model';
import {TokenHolderService} from '../../../security/token-holder.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEdit = false;
  user: User = {
    id: null,
    email: 'danya.polishchuk.2001@ukr.net',
    password: null,
    firstname: 'Danya',
    lastname: 'Polishchuk',
    role: 'TEACHER',
    enabled: true
  };
  originalUser: User = {
    id: null,
    email: 'danya.polishchuk.2001@ukr.net',
    password: null,
    firstname: 'Danya',
    lastname: 'Polishchuk',
    role: 'TEACHER',
    enabled: true
  };

  constructor(private tokenHolderService: TokenHolderService) {
  }

  ngOnInit(): void {
  }

  startEditProfile(): void {
    this.isEdit = true;
  }

  cancelEditProfile(): void {
    this.isEdit = false;
    this.user = { ...this.originalUser };
  }

  confirmEditProfile(): void {
    this.isEdit = false;
    this.originalUser = { ...this.user };
  }

  roleCanBeChanged(): boolean {
    console.log(`Your role`, this.tokenHolderService.getAuthorities());
    console.log(`IsAdmin`, this.tokenHolderService.isAdminUser());
    return this.isEdit && this.tokenHolderService.isAdminUser();
  }

}
