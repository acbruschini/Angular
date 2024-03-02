import { Injectable } from '@angular/core';
import { Student } from '../../layout/dash/pages/students/students.component';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class StudentArrayDbService {
  
  url: string = `${environment._API_URL}:${environment._API_PORT}`;
  private students$: BehaviorSubject<Student[]>

  constructor(private httpClient: HttpClient) {
    this.students$ = new BehaviorSubject<Student[]>([])
    this.updateAndEmitBehavior();
  }

  // EXPONGO EL BEHAVIOR COMO OBSERVABLE
  get studentsObs() {
    return this.students$.asObservable();
  }

  private updateAndEmitBehavior() {
    this.httpClient.get<Student[]>(this.url + '/students').subscribe({
      next: (data) => {
        this.students$.next(data)
      }
    })
  }

 
  addStudent(student: Student) {
    return this.httpClient.post<Student>(this.url + "/students", student)
  }

  deleteStudent(id: number | string) {
    return this.httpClient.delete<Student>(this.url + "/students/" + `${id}`)
  }

  updateStudent(student: Student) {
    return this.httpClient.put<Student>(this.url + "/students/" + `${student.id}`,student)
  }

  getAllStudents() {
    return this.httpClient.get<Student[]>(this.url + "/students")
  }

  getStudentById(id: number | string) {
    return this.httpClient.get<Student>(this.url + "/students/" + `${id}`)
  }

}
