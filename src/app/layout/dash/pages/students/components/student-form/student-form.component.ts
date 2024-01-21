import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../students.component';
import { StudentArrayDbService } from '../../../../../../core/services/student-array-db.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnChanges {

  studentForm: FormGroup

  @Output()
  studentListChange = new EventEmitter();

  @Input()
  studentToEdit: any

  constructor(private fb: FormBuilder, private studentsDb: StudentArrayDbService) {
    this.studentForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control("", Validators.required),
      lastname: this.fb.control("", Validators.required),
      email: this.fb.control("", Validators.required),
      password: this.fb.control("", Validators.required),
      role: this.fb.control("", Validators.required)
    })
    console.log("Se instancio student-form")
  }

  onSubmit(): void {
    if (!this.studentForm.valid) {
      this.studentForm.markAllAsTouched();
    } else if (!this.studentForm.value.id) {
      this.studentsDb.addStudent(this.studentForm.value)
    } else {
      this.studentsDb.updateStudent(this.studentForm.value)
    }
    this.studentListChange.emit();
    this.studentForm.reset();
  }

  onTest(): void {
    console.log(this.studentForm.value.id)

  }

  ngOnChanges() {
    if (this.studentToEdit) {
      this.studentForm.setValue(this.studentToEdit)
    }
  }
}
