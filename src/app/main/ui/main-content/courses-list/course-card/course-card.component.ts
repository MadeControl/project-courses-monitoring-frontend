import {Component, Input, OnInit} from '@angular/core';
import {CourseCard} from '../../../../model/course-card.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: CourseCard;

  constructor() { }

  ngOnInit(): void {
  }

  calculateActiveModeByStarId(id: number): string {
    if (id <= this.course.averageGrade) {
      return 'active';
    }
    return '';
  }

}
