import { Component, OnInit } from '@angular/core';
import { Inscription } from './models';
import { TableColumn } from '../../../../shared/components/array-table/array-table.component';
import { InscriptionsArrayDbService } from '../../../../core/services/inscriptions.service';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';
import { firstValueFrom, last, lastValueFrom } from 'rxjs';
import { Student } from '../students/students.component';
import { Course } from '../courses/models';
import { CourseArrayDbService } from '../../../../core/services/course-array-db.service';

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
  dataSource_2: any[] = [] //TEST

  tableColumns: TableColumn[] = [
    { label: "ID", def: "id", dataKey: "id" },
    { label: "Student ID", def: "studentId", dataKey: "studentId" },
    { label: "Course ID", def: "courseId", dataKey: "courseId" },
    { label: "Inscription Date", def: "date", dataKey: "date", pipe: "date" },
    { label: "Edit Record", def: "edit", dataKey: "id", edit: "x", delete: "x" }

  ]

  inscription: Inscription | null = null

  tableColumns_2: TableColumn[] = [
    { label: "ID", def: "id", dataKey: "id" },
    { label: "Student", def: "studentName", dataKey: "studentName" },
    { label: "Course", def: "courseName", dataKey: "courseName" },
    { label: "Inscription Date", def: "date", dataKey: "date", pipe: "date" },
  ]

  constructor(private inscriptionDb: InscriptionsArrayDbService, private studentsDb: StudentArrayDbService, private courseDb: CourseArrayDbService) {
  }
  ngOnInit() {
    //this.inscriptionDb.inscriptionsObs.subscribe( inscriptions => {this.dataSource = [...inscriptions]})
    // this.inscriptionDb.inscriptionsObs.subscribe(inscriptions => {
    //   this.dataSource_2 = inscriptions.map( async inscription => {
    //     let student = await lastValueFrom(this.studentsDb.getStudentById(2))
    //     let course = await lastValueFrom(this.courseDb.getCourseById(1))
    //     return {id: inscription.id, studentName: student.lastname, courseName: course.name, date: inscription.date}
    //   })

    //   this.dataSource = [...inscriptions]
    // })
    

    this.inscriptionDb.inscriptionsObs.subscribe({
      next: (inscriptions) => {
        this.dataSource_2 = inscriptions.map(async inscription => {
          let student = await firstValueFrom(this.studentsDb.getStudentById(2)).then( data => data)
          let course = await firstValueFrom(this.courseDb.getCourseById(1)).then( data => data)
          let fin = { id: inscription.id, studentName: student, courseName: course.name, date: inscription.date }
          return fin
        })

        console.log("---------")
        console.log(this.dataSource_2) // me devuelve un array de ZoneAwarePromis
        console.log("---------")
        this.dataSource = [...inscriptions]
      }
    })

    // console.log(this.dataSource)
    // let student = await lastValueFrom(this.studentsDb.getStudentById(1))
    // console.log(student)
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
    if (!inscription.id) {
      delete inscription.id
      this.inscriptionDb.addInscription(inscription)
    } else {
      this.inscriptionDb.updateInscription(inscription)
    }
  }

  onCourseDelete(id: number): void {
    this.inscriptionDb.deleteInscription(id);
  }

  onCourseEdit(inscription: Inscription) {
    this.inscription = inscription
  }
}
