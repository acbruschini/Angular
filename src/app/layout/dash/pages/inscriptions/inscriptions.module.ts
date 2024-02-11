import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionsComponent } from './inscriptions.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionsFormComponent } from './components/inscriptions-form/inscriptions-form.component';
import { ComponentsModule } from '../../../../shared/components/components.module';



@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class InscriptionsModule { }
