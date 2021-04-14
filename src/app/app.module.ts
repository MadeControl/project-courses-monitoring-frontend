import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './main/ui/footer/footer.component';
import { MainContentComponent } from './main/ui/main-content/main-content.component';
import { HeaderComponent } from './main/ui/header/header.component';
import { CoursesListComponent } from './main/ui/main-content/courses-list/courses-list.component';
import { CourseCardComponent } from './main/ui/main-content/courses-list/course-card/course-card.component';
import { CourseInfoComponent } from './main/ui/main-content/course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainContentComponent,
    HeaderComponent,
    CoursesListComponent,
    CourseCardComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
