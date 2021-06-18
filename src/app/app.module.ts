import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './main/ui/footer/footer.component';
import { MainContentComponent } from './main/ui/main-content/main-content.component';
import { HeaderComponent } from './main/ui/header/header.component';
import { CoursesListComponent } from './main/ui/main-content/courses-list/courses-list.component';
import { CourseCardComponent } from './main/ui/main-content/courses-list/course-card/course-card.component';
import { ErrorComponent } from './main/ui/main-content/error/error.component';
import {httpInterceptorProviders} from './main/security/authentication-interceptor';
import { LogInComponent } from './main/ui/main-content/log-in/log-in.component';
import { SignUpComponent } from './main/ui/main-content/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './main/ui/main-content/video/video.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CourseInfoComponent} from './main/ui/main-content/course-info/course-info.component';
import { ProfileComponent } from './main/ui/main-content/profile/profile.component';
import { SafePipe } from './main/ui/main-content/video/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainContentComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseCardComponent,
    ErrorComponent,
    CourseInfoComponent,
    LogInComponent,
    SignUpComponent,
    VideoComponent,
    ProfileComponent,
    SafePipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
