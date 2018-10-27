import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DarReportsComponent} from './dar-reports/dar-reports.component';
import {ReportsComponent} from './reports.component';


const routes: Routes = [{
  path: '',
  component: ReportsComponent,
  children: [{
    path: 'dar-reports',
    component: DarReportsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

  declarations: []
})
export class ReportsRoutingModule {
}

export const routedComponents = [
  ReportsComponent,
  DarReportsComponent,
];
