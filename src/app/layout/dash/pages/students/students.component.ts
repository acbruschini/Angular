import { Component, EventEmitter, Output } from '@angular/core';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {

  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'password', 'role', 'delete', 'edit'];
  dataSource = this.studentsDb.getAllStudents();
  passEdit: Student | null = null
   
  constructor(private studentsDb: StudentArrayDbService) { }

  onListChange(): void {
    this.updateList()
  }

  onStudentDelete(id: number): void {
    this.studentsDb.deleteStudent(id);
    this.updateList()
  }

  onPressStudentEdit(student:Student) {
    this.passEdit = student
  }

  updateList() {
    console.log("UPDATELIST")
    this.dataSource = [...this.studentsDb.getAllStudents()]
    
  }
}
