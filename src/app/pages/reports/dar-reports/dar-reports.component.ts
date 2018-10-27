import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dar-reports',
  templateUrl: './dar-reports.component.html',
  // styleUrls: ['./dar-reports.component.scss'],
})
export class DarReportsComponent {
  @Input() selectedApplication = 'All';
  applications: string[] = ['Dataport', 'IDBTS', 'iDash', 'Pulse', 'RTA'];
  public rows: any[] = [];
  public columns: any[] = [
    {title: 'Source Application', name: 'SOURCE_APPLICATION', sort: ''},
    {title: 'Schedule Name', name: 'SCHEDULE_NAME', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Username', name: 'USERNAME', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Schedule Type', name: 'SCHEDULE_TYPE', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Source Type', name: 'SOURCE_TYPE', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Report Name', name: 'REPORT_NAME', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Filter Name', name: 'FILTER_NAME', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Destination Type', name: 'DESTINATION_TYPE', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Email To', name: 'EMAIL_TO', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'Email Cc', name: 'EMAIL_CC', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'File Name', name: 'FILE_NAME', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'FTP Host', name: 'FTP_HOST', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'FTP Port', name: 'FTP_PORT', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'FTP Username', name: 'FTP_USERNAME', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
    {title: 'FTP Directory', name: 'FTP_DIRECTORY', sort: '', filtering: {filterString: '', placeholder: 'Search...'}},
  ];

  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  public data: any[] = [];

  constructor() {
    this.length = this.data.length;
    this.onChangeTable(this.config);
  }

  // public ngOnInit(): void {
  //   this.onChangeTable(this.config);
  // }

  public changePage(page: any, data: any[] = this.data): any[] {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: any[] = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: any[] = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

  changeApplication(application) {
    if (this.selectedApplication !== application) {
      this.selectedApplication = application;
    }
  }
}
