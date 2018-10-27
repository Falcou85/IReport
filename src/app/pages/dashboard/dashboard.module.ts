import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {DashboardComponent} from './dashboard.component';
import {ProfitCardComponent} from './profit-card/profit-card.component';
import {DashboardChartsPanelComponent} from './charts-panel/charts-panel.component';
import {OrdersChartComponent} from './charts-panel/charts/orders-chart.component';
import {ProfitChartComponent} from './charts-panel/charts/profit-chart.component';
import {ChartPanelHeaderComponent} from './charts-panel/chart-panel-header/chart-panel-header.component';
import {ChartPanelSummaryComponent} from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import {ChartModule} from 'angular2-chartjs';
import {StatsCardBackComponent} from './profit-card/back-side/stats-card-back.component';
import {StatsAreaChartComponent} from './profit-card/back-side/stats-area-chart.component';
import {StatsBarAnimationChartComponent} from './profit-card/front-side/stats-bar-animation-chart.component';
import {StatsCardFrontComponent} from './profit-card/front-side/stats-card-front.component';
import {TrafficRevealCardComponent} from './traffic-reveal-card/traffic-reveal-card.component';
import {TrafficBarComponent} from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import {TrafficFrontCardComponent} from './traffic-reveal-card/front-side/traffic-front-card.component';
import {TrafficCardsHeaderComponent} from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import {TrafficBackCardComponent} from './traffic-reveal-card/back-side/traffic-back-card.component';
import {TrafficBarChartComponent} from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import {DashboardVisitorsAnalyticsComponent,} from './visitors-analytics/visitors-analytics.component';
import {DashboardVisitorsAnalyticsChartComponent,} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {DashboardVisitorsStatisticsComponent,} from './visitors-analytics/visitors-statistics/visitors-statistics.component';
import {DashboardLegendChartComponent} from './legend-chart/legend-chart.component';
import {DashboardUserActivityComponent} from './user-activity/user-activity.component';
import {DashboardProgressSectionComponent} from './progress-section/progress-section.component';
import {SlideOutComponent} from './slide-out/slide-out.component';

import {CountryOrdersComponent} from './country-orders/country-orders.component';
import {CountryOrdersMapComponent} from './country-orders/map/country-orders-map.component';
import {CountryOrdersMapService} from './country-orders/map/country-orders-map.service';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {CountryOrdersChartComponent} from './country-orders/chart/country-orders-chart.component';
import {EarningCardComponent} from './earning-card/earning-card.component';
import {EarningCardBackComponent} from './earning-card/back-side/earning-card-back.component';
import {EarningPieChartComponent} from './earning-card/back-side/earning-pie-chart.component';
import {EarningCardFrontComponent} from './earning-card/front-side/earning-card-front.component';
import {EarningLiveUpdateChartComponent} from './earning-card/front-side/earning-live-update-chart.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    DashboardChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    DashboardVisitorsAnalyticsComponent,
    DashboardVisitorsAnalyticsChartComponent,
    DashboardVisitorsStatisticsComponent,
    DashboardLegendChartComponent,
    DashboardUserActivityComponent,
    DashboardProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
  ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class DashboardModule { }
