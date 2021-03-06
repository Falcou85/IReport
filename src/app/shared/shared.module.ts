import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbLayoutModule, NbMenuModule, NbPopoverModule,
  NbProgressBarModule, NbRouteTabsetModule, NbSearchModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbUserModule,
} from '@nebular/theme';

import {NbSecurityModule} from '@nebular/security';

import {
  FooterComponent, HeaderComponent, LayoutDirectionSwitcherComponent, SearchInputComponent, SwitcherComponent, ThemeSettingsComponent,
  ThemeSwitcherComponent, ThemeSwitcherListComponent, TinyMCEComponent,
} from './theme/components';
import {CapitalizePipe, NumberWithCommasPipe, PluralPipe, RoundPipe, TimingPipe,} from './pipes';
import {OneColumnLayoutComponent, SampleLayoutComponent, ThreeColumnsLayoutComponent, TwoColumnsLayoutComponent,} from './layouts';
import {DEFAULT_THEME} from './theme/styles/theme.default';
import {COSMIC_THEME} from './theme/styles/theme.cosmic';
import {CORPORATE_THEME} from './theme/styles/theme.corporate';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbSecurityModule, // *nbIsGranted directive,
  NbProgressBarModule,
];

const COMPONENTS = [
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
];

const ENTRY_COMPONENTS = [
  ThemeSwitcherListComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];
const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'corporate',
    },
    [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];


@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
