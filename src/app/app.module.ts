import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { D3Component } from './d3/d3.component';

import { ServiceService } from './service.service';
import { ContentComponent } from './content/content.component';
import { PipesComponent } from './pipes/pipes.component';
import { SuperheropurePipe } from './superheropure.pipe';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DiscoverpageComponent } from './discoverpage/discoverpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MatTableComponent,
    D3Component,
    ContentComponent,
    PipesComponent,
    SuperheropurePipe,
    AgGridComponent,
    DiscoverpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  
    
  ],
  providers: [ ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
