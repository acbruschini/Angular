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

  // addStudent(student: Student) {
  //   return this.httpClient.post<Student>(this.url + "/students", student).subscribe({
  //     next: () => this.updateAndEmitBehavior()
  //   })
  // }
  
  addStudent(student: Student) {
    return this.httpClient.post<Student>(this.url + "/students", student)
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(this.url + "/students/" + `${id}`).subscribe({ next: () => this.updateAndEmitBehavior() })
  }


  updateStudent(student: Student) {
    return this.httpClient.put(this.url + "/students/" + `${student.id}`,student).subscribe({ next: () => this.updateAndEmitBehavior() })
  }

  getAllStudents() {
    return this.httpClient.get<Student[]>(this.url + "/students")
  }

  getStudentById(id: number | string) {
    return this.httpClient.get<Student>(this.url + "/students/" + `${id}`)
  }

}
