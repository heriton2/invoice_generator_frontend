import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { ImportingComponent } from './importing/importing.component';
import {ImportingSuccessComponent} from './importing/importing-success.component';
import {ImportingErrorComponent} from './importing/importing-error.component';
import {HomeComponent} from "./importing/home.component";
import {InvoiceComponent} from "./invoice/invoice.component";

const routes: Routes = [
  { path: 'importing-page', component: ImportingComponent },
  { path: 'wizard-importing-success', component: ImportingSuccessComponent },
  { path: 'wizard-importing-error', component: ImportingErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ImportingComponent,
    ImportingSuccessComponent,
    ImportingErrorComponent,
    HomeComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
