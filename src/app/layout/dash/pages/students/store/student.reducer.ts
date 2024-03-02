import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { Student } from '../students.component';

export const studentFeatureKey = 'student';

export interface State {
  students: Student[],
  loading: boolean,
  error: unknown
}

export const initialState: State = {
  students: [],
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(StudentActions.loadStudents, state => ({...state, loading: true})), //retorno todo lo qeu habia en el estado y el loading lo cambio a true
  on(StudentActions.loadStudentsSuccess, (state, action) => ({...state, loading: false, students: action.data})), // recibe la data que devuelve la accion de success de student.action
  on(StudentActions.loadStudentsFailure, (state, action) => ({...state, loading: false, error: action.error})), // recibe el error que devuelve la accion de failure de student.action
);

export const studentFeature = createFeature({
  name: studentFeatureKey,
  reducer,
});

