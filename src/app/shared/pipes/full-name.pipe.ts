import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../layout/dash/pages/students/students.component';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student, ...args: string[]): string {
    let retorno = "";

    switch (args[0]) {
      case "1":
        retorno = value.name + " " + value.lastname;
        break;
      case "2":
        retorno = value.lastname + ", " + value.name;
        break;
      default:
        retorno = value.name + " " + value.lastname;
        break;
    }
    return retorno
  }

}
