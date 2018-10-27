import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import { MiscellaneousRoutingModule, routedComponents } from './miscellaneous-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MiscellaneousModule { }
