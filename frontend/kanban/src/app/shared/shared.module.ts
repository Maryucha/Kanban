import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    ErrorComponent
  ]
})
export class SharedModule { }
