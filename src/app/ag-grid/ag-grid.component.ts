import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular

  columnDefs = [
    {headerName: 'make', field: 'make', sortable: true, filter: true },
    {headerName: 'model', field: 'model', sortable: true, filter: true },
    {headerName: 'price', field: 'price', sortable: true, filter: true }
];

  rowData: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }

}
