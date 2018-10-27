import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chart-panel-summary',
  styleUrls: ['./chart-panel-summary.component.scss'],
  templateUrl: './chart-panel-summary.component.html',
})
export class ChartPanelSummaryComponent {
  @Input() summary: {title: string; value: number}[];
}

