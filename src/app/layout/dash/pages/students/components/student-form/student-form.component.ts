import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../students.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {

  studentForm: FormGroup

  @Output()
  studentSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: this.fb.control("", Validators.required),
      lastname: this.fb.control("", Validators.required),
      email: this.fb.control("", Validators.required),
      password: this.fb.control("", Validators.required),
      role: this.fb.control("", Validators.required)
    })
  }

  onSubmit(): void {
    if (!this.studentForm.valid) {
      this.studentForm.markAllAsTouched();
      alert("Macho! completame las cosas");
    } else {
      this.studentSubmitted.emit(this.studentForm.value);
      this.studentForm.reset();
    }
  }

  onTest(): void {
    console.log("test")
  }
}
