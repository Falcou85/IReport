import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';

import {UserActive, UserActivityService} from '../../../service/data/user-activity.service';

@Component({
  selector: 'app-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  templateUrl: './user-activity.component.html',
})
export class DashboardUserActivityComponent implements OnDestroy, OnInit {

  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnInit() {
    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
