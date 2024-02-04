import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayTablePipe'
})
export class ArrayTablePipe implements PipeTransform {

  transform(value: any, arg?: string): string {
    switch (arg) {
      case "date":
        value = value.toLocaleString("es-AR")
        break;
    }
    return value
  }
}