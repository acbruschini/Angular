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
 

    this.inscriptionDb.inscriptionsObs.subscribe({
      next: (inscriptions) => {
        this.dataSource_2 = inscriptions.map(async inscription => {
          let student = await firstValueFrom(this.studentsDb.getStudentById(2)).then( data => data)
          let course = await firstValueFrom(this.courseDb.getCourseById(1)).then( data => data)
          let fin = { id: inscription.id, studentName: student, courseName: course.name, date: inscription.date }
          return fin
        })

        this.dataSource = [...inscriptions]
      }
    })

  }


  onSubmitForm(inscription: Inscription) {
    if (!inscription.id) {
      delete inscription.id
      inscription = {...inscription, date: new Date()}
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
