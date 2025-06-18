import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material

import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/linechart/line-chart.component';
import { BarChartComponent } from './charts/barchart/bar-chart.component';
import { DonutChartComponent } from './charts/donutchart/donut-chart.component';
import { DualPieChartComponent } from './charts/piechart/dual-pie-chart.component';
import { AccordionTableComponent } from './charts/accordiontable/accordion-table.component';
import { RecordGalleryComponent } from './charts/cardSection/record-gallery.component';

// Angular Material Modules
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    DonutChartComponent,
    DualPieChartComponent,
    AccordionTableComponent,
    RecordGalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
