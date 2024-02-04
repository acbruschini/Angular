import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TableColumn {
  label: string;
  def: string;
  dataKey: string;
  edit?: string;
  delete?: string;
  pipe?: string;
}

const contenido = [
  {id: 1, nombre: "nombre1", apellido: "apellido1"},
  {id: 2, nombre: "nombre2", apellido: "apellido2"},
  {id: 3, nombre: "nombre3", apellido: "apellido3"},
]

@Component({
  selector: 'app-array-table',
  templateUrl: './array-table.component.html',
  styleUrl: './array-table.component.scss'
})

export class ArrayTableComponent {

  dataSource: any = []
  displayedColumns: string[] = []
  tableColumns:TableColumn[] = []
  
  @Input() set data(data: any) {
    this.dataSource = data
  }

  @Input() set columns(columns: TableColumn[]) {
    this.tableColumns = columns
    this.displayedColumns = this.tableColumns.map(column => column.def)
  }

  @Output() 
  onDelete = new EventEmitter<number>()

  @Output() 
  onEdit = new EventEmitter<any>()

  delete(id: number) {
    this.onDelete.emit(id);
  }
  edit(item: any) {
    this.onEdit.emit(item);
  }
}
