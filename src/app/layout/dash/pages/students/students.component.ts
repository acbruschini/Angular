import { Component, OnDestroy, OnInit} from '@angular/core';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';
import { TableColumn } from '../../../../shared/components/array-table/array-table.component';
import { Store } from '@ngrx/store';
import { StudentActions } from './store/student.actions';
import { selectStudents } from './store/student.selectors';
import { Subscription } from 'rxjs';

export interface Student {
  id?: number | string;
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

export class StudentsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [] 

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
   
  constructor(private studentsDb: StudentArrayDbService, private store: Store) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents())
    // Aca abajo me suscribo a UN SELECTOR, para que cuando cambie actualice
    this.subscriptions.push(this.store.select(selectStudents).subscribe( data => this.dataSource = data)) //guarda la referencia a la suscripcion en el array para desuscribirse despues
  }

  onSubmitForm(student: Student) {
    if(!student.id) {
      delete student["id"];
      this.store.dispatch(StudentActions.createStudent({student: student}))
    } else {
      this.store.dispatch(StudentActions.updateStudent({student: student}))
    }
  }

  onStudentDelete(id: number): void {
    this.store.dispatch(StudentActions.deleteStudent({id: id}))
  }

  onStudentEdit(student:Student) {
    //Coloca todos los datos en el form al llenar this.student que es @input de student-form
    this.student = student
  }

    
  ngOnDestroy(): void {
    this.subscriptions.forEach((suscription) => suscription.unsubscribe())
  }

}
