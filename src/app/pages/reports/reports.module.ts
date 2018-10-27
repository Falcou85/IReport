import {NgModule} from '@angular/core';
import {Ng2TableModule} from 'ng2-table';

import {SharedModule} from '../../shared/shared.module';
import {ReportsRoutingModule, routedComponents} from './reports-routing.module';
import {PaginationModule} from 'ng2-bootstrap';


@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class ReportsModule {
}
