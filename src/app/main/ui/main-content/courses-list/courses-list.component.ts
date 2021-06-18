import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CourseService} from '../../../service/course.service';
import {CourseCard} from '../../../model/course-card.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courseCards: Array<CourseCard> = [];

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourseCards().subscribe(cards => {
      this.courseCards = cards;
      console.log(`Cards were uploaded from back-end`, cards);
    }, error => {
      console.error(`Cards won't uploaded from back-end`, error);
    });
  }

  routeToCourse(id: number): void {
    this.router.navigate([`/courses/${id}`]).then();
  }
}
