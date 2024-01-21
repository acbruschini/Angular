import { Component } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

const studentList: Student[] = [
  {id: Date.now() + Math.floor(Math.random()*100), name: "Pablo", lastname: "Stanley", email: "paulstanley@gmail.com", password: "soyElCapo", role: "ADMIN"},
  {id: Date.now() + Math.floor(Math.random()*100), name: "Eugenio", lastname: "Simmons", email: "genesimmons@gmail.com", password: "soyElMasCapo", role: "ADMIN"},
  {id: Date.now() + Math.floor(Math.random()*100), name: "Pedro", lastname: "Criss", email: "petercriss@gmail.com", password: "meGustaLaFaFaFa", role: "USER"},
  {id: Date.now() + Math.floor(Math.random()*100), name: "Pablo", lastname: "Frehley", email: "acefrehley@gmail.com", password: "meGustaElVino", role: "USER"},
  
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'password', 'role', 'delete', 'edit'];
  dataSource = studentList;

  onStudentSubmitted(event: Student):void {
    this.addStudent(event);
  }

  onStudentEdit(event: Student):void {
    
  }

  onStudentDelete(student: Student):void {
    const dataSourceFiltered = this.dataSource.filter(el => el.id != student.id)
    this.dataSource = [...dataSourceFiltered];
  }
  
  addStudent(newStudent: Student):void {
    this.dataSource = [...this.dataSource, {...newStudent, id: Date.now() + Math.floor(Math.random()*100)}] 
  }


}
