import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VideoComponent} from '../video/video.component';
import {Video} from '../../../model/video.model';
import {CourseService} from '../../../service/course.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../model/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  isShowVideos = true;
  course: Course = {
    id: 0,
    title: '',
    previewDescription: '',
    studentsQuantity: 0,
    gradesQuantity: 0,
    averageGrade: 0,
    author: {id: 0, name: ''},
    iconName: '',
    created: '',
    started: '',
    finished: '',
    requirements: [],
    fullDescription: '',
    videos: []
  };
  videos: Video[] = [];

  constructor(public dialog: MatDialog, private courseService: CourseService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.params['id'];
    this.courseService.getCourseById(id).subscribe(course => {
      this.course = course;
      console.log(`Course was uploaded from back-end`, course);
    }, error => {
      console.error(`Course wasn't uploaded from back-end`, error);
    });
  }

  openDialog(video: Video): void {
    this.courseService.currentCourseVideo = video;
    // @ts-ignore
    const dialogRef = this.dialog.open(VideoComponent, {video});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeVisibilityVideos(): void {
    this.isShowVideos = !this.isShowVideos;
  }

  calculateActiveModeByStarId(id: number): string {
    if (id >= this.course.averageGrade) {
      return 'active';
    }
    return '';
  }

  calculateDurationTimeForVideo(video: Video): string {
    const h = Math.floor(video.duration / 3600);
    const m = Math.floor(video.duration % 3600 / 60);
    const s = Math.floor(video.duration % 3600 % 60);
    const hours = h < 10 ? `0${h}` : `${h}`;
    const minutes = m < 10 ? `0${m}` : `${m}`;
    const seconds = s < 10 ? `0${s}` : `${s}`;
    return `${hours}:${minutes}:${seconds}`;
  }

}
