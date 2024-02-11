import { Component, OnInit} from '@angular/core';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';
import { TableColumn } from '../../../../shared/components/array-table/array-table.component';

export interface Student {
  id?: number;
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

export class StudentsComponent implements OnInit{

  tableColumns: TableColumn[] = [
    // {label: "ID", def: "id", dataKey: "id"},
    {label: "Name", def: "name", dataKey: "name"},
    {label: "Last Name", def: "lastname", dataKey: "lastname"},
    {label: "Email", def: "email", dataKey: "email"},
    {label: "Password", def: "password", dataKey: "password"},
    {label: "Role", def: "role", dataKey: "role"},
    {label: "Edit Record", def: "edit", dataKey: "id", edit: "x", delete: "x"}
  ];
  
  dataSource: Student[] = [];
  student: Student | null = null
   
  constructor(private studentsDb: StudentArrayDbService) {
  }

  ngOnInit(): void {
    this.studentsDb.studentsObs.subscribe(students => {
      this.dataSource = [...students]
    })
  }

  onSubmitForm(student: Student) {
    if(!student.id) {
      delete student["id"];
      this.studentsDb.addStudent(student)
    } else {
      this.studentsDb.updateStudent(student)
    }
  }

  onStudentDelete(id: number): void {
    this.studentsDb.deleteStudent(id);
  }

  onStudentEdit(student:Student) {
    //Coloca todos los datos en el form al llenar this.student que es @input de student-form
    this.student = student
  }

}
