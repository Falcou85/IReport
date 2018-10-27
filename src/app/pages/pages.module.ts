import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {DarReportsComponent} from './reports/dar-reports/dar-reports.component';
import {PaginationModule} from 'ng2-bootstrap';
import {Ng2TableModule} from 'ng2-table';
import {ReportsComponent} from './reports/reports.component';


const PAGES_COMPONENTS = [
  PagesComponent,
  ReportsComponent,
  DarReportsComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    SharedModule,
    DashboardModule,
    MiscellaneousModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
  ],
  declarations: [...PAGES_COMPONENTS, ]
})
export class PagesModule {
}
