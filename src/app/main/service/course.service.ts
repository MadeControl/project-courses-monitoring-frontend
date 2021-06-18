import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Course} from '../model/course.model';
import {CourseCard} from '../model/course-card.model';
import {Video} from '../model/video.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  currentCourseVideo: Video;

  constructor(private http: HttpClient) { }

  private coursesURL = `${environment.url}/courses`;

  getAllCourseCards(): Observable<Array<CourseCard>> {
    return this.http.get<Array<CourseCard>>(this.coursesURL);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.coursesURL}/${id}`);
  }
}
