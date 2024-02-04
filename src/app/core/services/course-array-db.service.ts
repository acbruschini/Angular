import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../layout/dash/pages/courses/models';

let coursesList: Course[] = [
  { id: Date.now() + Math.floor(Math.random() * 100), name: "Macromedia Flash", description: "Este es un curso de la nueva tecnologia Flash", startDate: new Date('2024-12-17'), endDate: new Date('2025-12-17')},
  { id: Date.now() + Math.floor(Math.random() * 100), name: "Basic", description: "Conoce este nuevo y vigente lenguaje de programacion", startDate: new Date('2024-12-10'), endDate: new Date('2025-12-10')},
  { id: Date.now() + Math.floor(Math.random() * 100), name: "Armado de Originales de Imprenta", description: "Aprende este arte necesario y unico", startDate: new Date('2024-12-07'), endDate: new Date('2025-12-07')},
]

@Injectable({
  providedIn: 'root'
})

export class CourseArrayDbService {

  private courses$: BehaviorSubject<Course[]>;

  constructor() {
    this.courses$ = new BehaviorSubject<Course[]>([]);
    this.courses$.next(coursesList);
  }

  get coursesObs$() {
    return this.courses$.asObservable();
  }

  addCourse(course: Course) {
    let id = Date.now() + Math.floor(Math.random() * 100);
    coursesList.push({ ...course, id });
    this.courses$.next(coursesList);
  }

  deleteCourse(id: number){
    const dataSourceFiltered = coursesList.filter(el => el.id != id)
    coursesList = [...dataSourceFiltered];
    this.courses$.next(coursesList);
  }


  updateCourse(course: Course) {
    const index = coursesList.findIndex(el => el.id == course.id)
    coursesList[index] = course;
    this.courses$.next(coursesList);
  }

  getAllCourses() {
    return coursesList;
  }

}