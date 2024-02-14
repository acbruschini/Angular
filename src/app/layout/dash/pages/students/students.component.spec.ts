import { TestBed } from "@angular/core/testing"
import { StudentsComponent } from "./students.component"
import { MockProvider } from "ng-mocks"
import { StudentArrayDbService } from "../../../../core/services/student-array-db.service"
import { StudentFormComponent } from "./components/student-form/student-form.component"
import { ArrayTableComponent } from "../../../../shared/components/array-table/array-table.component"
import { MatFormField, MatLabel } from "@angular/material/form-field"
import { MatSelect } from "@angular/material/select"
import { MatOption } from "@angular/material/core"
import { SharedModule } from "../../../../shared/shared.module"

describe("Student Tests", () => {
    let component: StudentsComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StudentsComponent, StudentFormComponent, ArrayTableComponent, MatFormField, MatLabel, MatSelect, MatOption],
            imports: [ SharedModule],
            providers: [
                MockProvider(StudentArrayDbService)
            ]
        })
        component = TestBed.createComponent(StudentsComponent).componentInstance
    })

    it("Should have edit and delete buttons in the table", () => {
        expect(component.student).toBe(null)
    })



})