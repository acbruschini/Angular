import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})

export class CourseFormComponent implements OnChanges {

  courseForm: FormGroup

  @Output()
  onSubmitForm = new EventEmitter();

  @Input()
  courseToEdit: Course | null = null

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control(""),
      description: this.fb.control(""),
      startDate: this.fb.control(""),
      endDate: this.fb.control(""),
    })
  }

  onSubmit() {
    if (!this.courseForm.valid) {
      this.courseForm.markAllAsTouched();
    } else {
      this.onSubmitForm.emit(this.courseForm.value)
      this.courseForm.reset();
      this.courseToEdit = null
    }
  }

  ngOnChanges(): void {
    if (this.courseToEdit) {
      this.courseForm.setValue(this.courseToEdit)
    }
  }

}
