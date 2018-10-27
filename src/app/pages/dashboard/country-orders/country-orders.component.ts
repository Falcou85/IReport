import {Component, OnDestroy} from '@angular/core';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-country-orders',
  styleUrls: ['./country-orders.component.scss'],
  templateUrl: './country-orders.component.html',
})
export class CountryOrdersComponent implements OnDestroy {

  private alive = true;
  countryName = '';
  countryData = [];
  countriesCategories = ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 20);
    });
  }

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  selectCountryById(countryName: string) {
    const nPoint = this.countriesCategories.length;

    this.countryName = countryName;
    this.countryData = this.getRandomData(nPoint);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
