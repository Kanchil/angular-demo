import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot()
  ],
  exports: [
    ElModule
  ],
  declarations: []
})
export class SharedModule { }
