import {Author} from './author.model';

export interface CourseCard {
  id: number;
  title: string;
  author: Author;
  previewDescription: string;
  iconName: string;
  gradesQuantity: number;
  averageGrade: number;
}
