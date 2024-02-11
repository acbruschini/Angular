import { Component, OnInit } from '@angular/core';
import { Course } from './models';
import { TableColumn } from '../../../../shared/components/array-table/array-table.component';
import { CourseArrayDbService } from '../../../../core/services/course-array-db.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {

  dataSource: Course[] = [];
  course: Course | null = null

  tableColumns: TableColumn[] = [
    {label: "ID", def: "id", dataKey: "id"},
    {label: "Name", def: "name", dataKey: "name"},
    {label: "Description", def: "description", dataKey: "description"},
    {label: "Start Date", def: "startDate", dataKey: "startDate", pipe: "date"},
    {label: "End Date", def: "endDate", dataKey: "endDate", pipe: "date"},
    {label: "Edit Record", def: "edit", dataKey: "id", edit: "x", delete: "x"}
  ];

  constructor(private coursesDb: CourseArrayDbService) {

  }

  ngOnInit(): void {
    this.coursesDb.coursesObs$.subscribe( courses => {
      this.dataSource = [...courses]
    })
  }

  onSubmitForm(course: Course) {
    if(!course.id) {
      delete course.id
      this.coursesDb.addCourse(course)
    } else {
      this.coursesDb.updateCourse(course)
    }
  }

  onCourseDelete(id: number): void {
    this.coursesDb.deleteCourse(id);
  }

  onCourseEdit(course:Course) {
    this.course = course
  }
}
