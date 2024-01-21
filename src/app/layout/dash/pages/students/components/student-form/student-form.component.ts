import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../students.component';
import { StudentArrayDbService } from '../../../../../../core/services/student-array-db.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {

  studentForm: FormGroup

  @Output()
  studentListChange = new EventEmitter();

  // @Input()
  // studentToEdit: any

  constructor(private fb: FormBuilder, private studentsDb: StudentArrayDbService) {
    this.studentForm = this.fb.group({
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
      //alert("Macho! completame las cosas");
    } else {
      this.studentsDb.addStudent(this.studentForm.value)
      console.log(this.studentForm.value)
      this.studentListChange.emit();
      this.studentForm.reset();
    }
  }

  onTest(): void {
console.log("entro")

  }
}
