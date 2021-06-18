import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Course} from '../model/course.model';
import {CourseCard} from '../model/course-card.model';
import {Video} from '../model/video.model';
import {CourseGrade} from '../model/grade.model';
import {Theme} from '../model/theme.model';

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

  createGrade(grade: CourseGrade): Observable<any> {
    return this.http.post(`${this.coursesURL}/${grade.courseId}/grade`, grade);
  }

  getAllThemes(): Observable<Array<Theme>> {
    return this.http.get<Array<Theme>>(`${this.coursesURL}/themes`);
  }
}
