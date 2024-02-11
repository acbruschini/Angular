import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../layout/dash/pages/courses/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CourseArrayDbService {
  
  url: string = `${environment._API_URL}:${environment._API_PORT}`;
  private courses$: BehaviorSubject<Course[]>;

  constructor(private httpClient: HttpClient) {
    this.courses$ = new BehaviorSubject<Course[]>([]);
    this.updateAndEmitBehavior()
  }

  get coursesObs$() {
    return this.courses$.asObservable();
  }

  private updateAndEmitBehavior() {
    this.httpClient.get<Course[]>(this.url + "/courses").subscribe({ next: (data) => { this.courses$.next(data) } })
  }

  addCourse(course: Course) {
    return this.httpClient.post(this.url + "/courses", course).subscribe({next: () => this.updateAndEmitBehavior()})
  }

  deleteCourse(id: number) {
    return this.httpClient.delete(this.url + "/courses/" + `${id}`).subscribe({next: () => this.updateAndEmitBehavior()})
  }


  updateCourse(course: Course) {
    return this.httpClient.put(this.url + "/courses/" + `${course.id}`, course).subscribe({next: () => this.updateAndEmitBehavior()})
  }

  getAllCourses() {
    return this.httpClient.get<Course[]>(this.url + "/courses")
  }

  getCourseById(id: number | string) {
    return this.httpClient.get<Course>(this.url + "/courses/" + `${id}`)
  }
}