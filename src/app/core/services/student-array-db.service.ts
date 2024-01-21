import { Injectable } from '@angular/core';
import { Student } from '../../layout/dash/pages/students/students.component';

@Injectable({
  providedIn: 'root'
})


export class StudentArrayDbService {

  studentList: Student[] = [
    {id: Date.now() + Math.floor(Math.random()*100), name: "Pablo", lastname: "Stanley", email: "paulstanley@gmail.com", password: "soyElCapo", role: "ADMIN"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Eugenio", lastname: "Simmons", email: "genesimmons@gmail.com", password: "soyElMasCapo", role: "ADMIN"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Pedro", lastname: "Criss", email: "petercriss@gmail.com", password: "meGustaLaFaFaFa", role: "USER"},
    {id: Date.now() + Math.floor(Math.random()*100), name: "Pablo", lastname: "Frehley", email: "acefrehley@gmail.com", password: "meGustaElVino", role: "USER"},
    
  ]
  constructor() { }

  addStudent(student:Student): Student[] {
    let id = Date.now() + Math.floor(Math.random()*100);
    this.studentList.push({...student,id})
    return this.studentList
  }

  deleteStudent(id: number): Student[] {
    const dataSourceFiltered = this.studentList.filter(el => el.id != id)
    this.studentList = [...dataSourceFiltered];
    return this.studentList
  }

  getAllStudents() {
    return this.studentList
  }
}
