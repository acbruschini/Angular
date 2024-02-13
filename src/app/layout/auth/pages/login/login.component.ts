import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { StudentArrayDbService } from '../../../../core/services/student-array-db.service';
import { Route } from '@angular/router';
import { Student } from '../../../dash/pages/students/students.component';
import { AuthService } from '../../../../core/services/auth.service';

export interface LoginData {
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  studentLoggedIn: Student | null = null
  error: string | null = null

  constructor(private authService: AuthService) {
  }

  onSubmitedForm(loginData: LoginData) {
    this.authService.login(loginData)
    this.error = this.authService.error
  }



}
