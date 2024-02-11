import { Component, OnInit } from '@angular/core';
import { Inscription } from './models';
import { TableColumn } from '../../../../shared/components/array-table/array-table.component';
import { InscriptionsArrayDbService } from '../../../../core/services/inscriptions.service';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';
import { lastValueFrom } from 'rxjs';
import { Student } from '../students/students.component';
import { Course } from '../courses/models';

interface InscriptionTable {
  id: string | number,
  studentName: string
  courseName: string
  date: Date
}

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent implements OnInit {
  
  dataSource: Inscription[] = []
  tableColumns: TableColumn[] = [
    {label: "ID", def: "id", dataKey: "id"},
    {label: "Student ID", def: "studentId", dataKey: "studentId"},
    {label: "Course ID", def: "courseId", dataKey: "courseId"},
    {label: "Inscription Date", def: "date", dataKey: "date", pipe: "date"},
    {label: "Edit Record", def: "edit", dataKey: "id", edit: "x", delete: "x"}

  ]

  inscription: Inscription | null = null

  // tableColumns: TableColumn[] = [
  //   {label: "ID", def: "id", dataKey: "id"},
  //   {label: "Student", def: "studentName", dataKey: "studentName"},
  //   {label: "Course", def: "courseName", dataKey: "courseName"},
  //   {label: "Inscription Date", def: "date", dataKey: "date", pipe: "date"},
  // ]

  constructor(private inscriptionDb: InscriptionsArrayDbService, private studentsDb: StudentArrayDbService) {
  }

 async ngOnInit() {
    // let test
    // console.log(await lastValueFrom(this.studentsDb.getStudentById(2)))
    // console.log(await lastValueFrom(this.studentsDb.getAllStudents()))
    this.inscriptionDb.inscriptionsObs.subscribe( inscriptions => {this.dataSource = [...inscriptions]})
  }

  // private in2inTable (inscriptions: Inscription[]) {
  //   const inscriptionsTable = inscriptions.map( async inscription => {
  //     let student: Student = await lastValueFrom(this.studentsDb.getStudentById(inscription.studentId))
  //     let inscriptionTableRow = {id: inscription.id, studentName: student.name, courseName: "Ejemplo", date: inscription.date}
  //     return inscriptionTableRow
  //   })
  //   return inscriptionsTable
  // }

  onSubmitForm(inscription: Inscription) {
    if(!inscription.id) {
      delete inscription.id
      this.inscriptionDb.addInscription(inscription)
    } else {
      this.inscriptionDb.updateInscription(inscription)
    }
  }

  onCourseDelete(id: number): void {
    this.inscriptionDb.deleteInscription(id);
  }

  onCourseEdit(inscription:Inscription) {
    this.inscription = inscription
  }
}
