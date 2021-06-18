import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './main/ui/main-content/error/error.component';
import {LogInComponent} from './main/ui/main-content/log-in/log-in.component';
import {SignUpComponent} from './main/ui/main-content/sign-up/sign-up.component';
import {CoursesListComponent} from './main/ui/main-content/courses-list/courses-list.component';
import {CourseInfoComponent} from './main/ui/main-content/course-info/course-info.component';
import {ProfileComponent} from './main/ui/main-content/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'registry', component: SignUpComponent },
  { path: 'users/:id', component: ProfileComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: CourseInfoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
