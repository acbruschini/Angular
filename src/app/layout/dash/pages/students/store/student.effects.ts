import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StudentActions } from './student.actions';
import { StudentArrayDbService } from '../../../../../core/services/student-array-db.service';


@Injectable()
export class StudentEffects {

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentActions.loadStudents),
      concatMap(() =>
        this.studentsDb.getAllStudents().pipe(
          map(data => StudentActions.loadStudentsSuccess({ data })),
          catchError(error => of(StudentActions.loadStudentsFailure({ error }))))
      )
    );
  });

  createStudents$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentActions.createStudent),
      concatMap((action) =>
        this.studentsDb.addStudent(action.student).pipe(
          map(resp => StudentActions.createStudentSuccess( { data: resp })),
          catchError(error => of(StudentActions.createStudentFailure({ error }))))
      )
    );
  });

  createStudentsSuccess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentActions.createStudentSuccess),
      map(() => StudentActions.loadStudents())
      )
  });

  constructor(private actions$: Actions, private studentsDb: StudentArrayDbService) {}
}
