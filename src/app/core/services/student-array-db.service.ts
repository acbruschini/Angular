import { Injectable, OnInit } from '@angular/core';
import { Student } from '../../layout/dash/pages/students/students.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StudentArrayDbService{

  studentList: Student[] = [
    { id: Date.now() + Math.floor(Math.random() * 100), name: "Pablo", lastname: "Stanley", email: "paulstanley@gmail.com", password: "soyElCapo", role: "ADMIN" },
    { id: Date.now() + Math.floor(Math.random() * 100), name: "Eugenio", lastname: "Simmons", email: "genesimmons@gmail.com", password: "soyElMasCapo", role: "ADMIN" },
    { id: Date.now() + Math.floor(Math.random() * 100), name: "Pedro", lastname: "Criss", email: "petercriss@gmail.com", password: "meGustaLaFaFaFa", role: "USER" },
    { id: Date.now() + Math.floor(Math.random() * 100), name: "Pablo", lastname: "Frehley", email: "acefrehley@gmail.com", password: "meGustaElVino", role: "USER" },

  ]

  private students$: BehaviorSubject<Student[]>

  constructor() {
    this.students$ = new BehaviorSubject<Student[]>([])
    this.students$.next(this.studentList);
  }

  // EXPONGO EL BEHAVIOR COMO OBSERVABLE
  get studentsObs() {
    return this.students$.asObservable();
  }

  addStudent(student: Student) {
    let id = Date.now() + Math.floor(Math.random() * 100);
    this.studentList.push({ ...student, id });
    this.students$.next(this.studentList);
  }

  deleteStudent(id: number){
    const dataSourceFiltered = this.studentList.filter(el => el.id != id)
    this.studentList = [...dataSourceFiltered];
    this.students$.next(this.studentList);
  }


  updateStudent(student: Student) {
    const index = this.studentList.findIndex(el => el.id == student.id)
    this.studentList[index] = student;
    this.students$.next(this.studentList);
  }

  getAllStudents() {
    return this.studentList;
  }

}
