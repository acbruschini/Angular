import { Component, EventEmitter, Output, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnChanges {
  loginForm: FormGroup

  @Output()
  onSubmitForm = new EventEmitter

  @Input()
  error: string | null = null

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: fb.control("", Validators.required),
      password: fb.control("", Validators.required)
    })
  }

  ngOnChanges(){
    console.log(this.error)
  }
  

  onSubmit() {
    this.onSubmitForm.emit(this.loginForm.value)
  }

}
