import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Video} from '../../../model/video.model';
import {CourseService} from '../../../service/course.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public video: Video, private courseService: CourseService) { }

  ngOnInit(): void {
    this.video = this.courseService.currentCourseVideo;
    console.log(`Video in component`, this.video);
  }

}
