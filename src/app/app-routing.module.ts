import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ImportingSuccessComponent } from './importing/importing-success.component';
import { ImportingErrorComponent } from './importing/importing-error.component';
import {ImportingComponent} from './importing/importing.component'

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'wizard-importing-sucess', component: ImportingSuccessComponent },
  { path: 'wizard-importing-error', component: ImportingErrorComponent },
  { path: 'importing-page', component: ImportingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
