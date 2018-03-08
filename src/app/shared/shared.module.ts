import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ElModule.forRoot()
  ],
  exports: [
    ElModule
  ],
  declarations: []
})
export class SharedModule { }
