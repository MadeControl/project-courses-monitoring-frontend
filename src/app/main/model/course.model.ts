import {Author} from './author.model';
import {CourseRequirement} from './course-requirement.model';
import {Video} from './video.model';

export interface Course {
  id: number;
  title: string;
  previewDescription: string;

  studentsQuantity: number;
  gradesQuantity: number;
  averageGrade: number;

  author: Author;
  iconName: string;

  created: string;
  started: string;
  finished: string;

  requirements: Array<CourseRequirement>;
  fullDescription: string;
  videos: Array<Video>;
}
