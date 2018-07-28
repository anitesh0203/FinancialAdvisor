import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceLayerService } from './services/service-layer.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { GetDataPageComponent } from './data/get-data-page/get-data-page.component';
import { EvolutionComponent } from './evolution-component/evolution-component/evolution-component.component';
import { GoogleChartComponent } from './google-chart-component/google-chart-component/google-chart-component.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { TransactionDetailsComponent } from './transaction-details/transaction-details/transaction-details.component';
import { AppRoutingModule} from './app.routes';
import { Materialmodule} from '../app/material.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { PersonDetailsComponent } from './person-details/person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    GetDataPageComponent,
    EvolutionComponent,
    GoogleChartComponent,
    MaterialTableComponent,
    TransactionDetailsComponent,
    PersonDetailsComponent

  ],
  imports: [
    BrowserModule, HttpClientModule, CommonModule, RouterModule, ReactiveFormsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  Materialmodule,
  FormsModule,
  MatFormFieldModule, MatInputModule

  ],
  exports: [ AppRoutingModule, BrowserAnimationsModule,Materialmodule,FormsModule,MatFormFieldModule, MatInputModule ],
  providers: [ ServiceLayerService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
