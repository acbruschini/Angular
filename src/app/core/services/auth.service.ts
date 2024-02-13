import { EventEmitter, Injectable, Output } from '@angular/core';
import { Student } from '../../layout/dash/pages/students/students.component';
import { StudentArrayDbService } from './student-array-db.service';
import { LoginData } from '../../layout/auth/pages/login/login.component';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})


export class AuthService {

    studentLoggedIn: Student | null = null
    error: string | null = null

    constructor(private studentDb: StudentArrayDbService, private router: Router) {
    }

    login(loginData: LoginData) {
        this.studentDb.getAllStudents().subscribe({
            next: (students) => {
                let studentFind = students.find(student => student.email == loginData.email && student.password == loginData.password)
                if (studentFind) {
                    this.studentLoggedIn = studentFind
                    localStorage.setItem("userToken", "acaestariael token")
                    this.router.navigate(["dashboard"])
                }
                else {
                    this.error = "Not student found"
                    this.router.navigate(["login"])
                    console.log(this.error)
                }
            }
        })
    }

    logout() {
        this.studentLoggedIn = null
        localStorage.removeItem("userToken")
        this.router.navigate(["login"])
    }

}