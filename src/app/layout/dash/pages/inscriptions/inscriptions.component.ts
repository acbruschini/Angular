import { Component, OnInit } from '@angular/core';
import { Inscription } from './models';
import { TableColumn } from '../../../../shared/components/array-table/array-table.component';
import { InscriptionsArrayDbService } from '../../../../core/services/inscriptions.service';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';
import { lastValueFrom } from 'rxjs';

interface InscriptionTable {
  id: string,
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
  dataSource2: any[] = []
  // tableColumns: TableColumn[] = [
  //   {label: "ID", def: "id", dataKey: "id"},
  //   {label: "Student ID", def: "studentId", dataKey: "studentId"},
  //   {label: "Course ID", def: "courseId", dataKey: "courseId"},
  //   {label: "Inscription Date", def: "date", dataKey: "date", pipe: "date"},
  // ]

  tableColumns: TableColumn[] = [
    {label: "ID", def: "id", dataKey: "id"},
    {label: "Student Name", def: "studentId", dataKey: "studentId"},
    {label: "Course Name", def: "courseId", dataKey: "courseId"},
    {label: "Inscription Date", def: "date", dataKey: "date", pipe: "date"},
  ]

  constructor(private inscriptionDb: InscriptionsArrayDbService, private studentsDb: StudentArrayDbService) {
  }

 async ngOnInit() {
    let test
    console.log(await lastValueFrom(this.studentsDb.getStudentById(2)))
    console.log(await lastValueFrom(this.studentsDb.getAllStudents()))
    this.inscriptionDb.inscriptionsObs.subscribe( inscriptions => {this.dataSource = [...inscriptions]})

  }

}
