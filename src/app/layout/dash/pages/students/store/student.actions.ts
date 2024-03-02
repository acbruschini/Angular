import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Student } from '../students.component';

export const StudentActions = createActionGroup({
  source: 'Student',
  events: {
    'Load Students': emptyProps(), // esta dispara las proximas dos dependiendo si success o no
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),
    'Create Student': props<{ student: Student }>(),
    'Create Student Success': props<{ data: Student }>(),
    'Create Student Failure': props<{ error: unknown }>(),
    
  }
});
