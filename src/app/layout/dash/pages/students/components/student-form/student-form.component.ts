import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../students.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})

export class StudentFormComponent implements OnChanges {

  studentForm: FormGroup

  @Output()
  onSubmitForm = new EventEmitter();

  @Input()
  studentToEdit: Student | null = null

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      id: this.fb.control(null),
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
      console.log("No es valido")
    } else if (!this.studentForm.value.id) {
      console.log("Creando")
      this.onSubmitForm.emit(this.studentForm.value)
    } else {
      console.log("Editando")
      this.onSubmitForm.emit(this.studentForm.value)
    }
    //this.studentListChange.emit();
    this.studentForm.reset();
  }

  ngOnChanges() {
    if (this.studentToEdit) {
      this.studentForm.setValue(this.studentToEdit)
    }
  }
}
