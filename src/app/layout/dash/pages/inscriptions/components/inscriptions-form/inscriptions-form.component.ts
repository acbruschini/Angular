import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../students/students.component';
import { StudentArrayDbService } from '../../../../../../core/services/student-array-db.service';
import { CourseArrayDbService } from '../../../../../../core/services/course-array-db.service';
import { Course } from '../../../courses/models';
import { Inscription } from '../../models';

@Component({
  selector: 'app-inscriptions-form',
  templateUrl: './inscriptions-form.component.html',
  styleUrl: './inscriptions-form.component.scss'
})
export class InscriptionsFormComponent implements OnChanges {

  inscriptionsForm: FormGroup
  studentList: Student[] = []
  coursesList: Course[] = []

  @Output()
  onSubmitForm = new EventEmitter;

  @Input()
  inscriptionToEdit: Inscription | null = null

  constructor(private fb: FormBuilder, private studentsDb: StudentArrayDbService, private coursesDb: CourseArrayDbService) {
    this.inscriptionsForm = this.fb.group({
      id: this.fb.control(null),
      studentId: this.fb.control("", Validators.required),
      courseId: this.fb.control("", Validators.required),
      date: this.fb.control("")
    })
  }

  ngOnChanges(): void {
    if (this.inscriptionToEdit) {
      this.inscriptionsForm.setValue(this.inscriptionToEdit)
    }
  }

  ngOnInit(): void {
    this.studentsDb.studentsObs.subscribe(data => this.studentList = data);
    this.coursesDb.coursesObs$.subscribe(data => this.coursesList = data);
  }

  onSubmit() {
    if (!this.inscriptionsForm.valid) {
      this.inscriptionsForm.markAllAsTouched();
    } else {
      this.onSubmitForm.emit(this.inscriptionsForm.value)
      this.inscriptionsForm.reset();
      this.inscriptionToEdit = null
    }
  }
}
