import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenHolderService} from '../../security/token-holder.service';
import {Theme} from '../../model/theme.model';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShowProfile = false;
  themes: Array<Theme> = [];

  constructor(private router: Router, private tokenHolderService: TokenHolderService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllThemes().subscribe(themes => {
      this.themes = themes;
      console.log('Themes was uploaded from back-end', themes);
    });
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
