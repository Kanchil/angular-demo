import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { PersonListComponent } from './person-list/person-list.component';
import {PersonRoutingModule} from './person-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PersonRoutingModule
  ],
  declarations: [PersonListComponent]
})
export class PersonModule { }
