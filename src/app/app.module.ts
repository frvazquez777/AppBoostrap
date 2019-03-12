import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
//    MatInputModule, 
//    MatButtonModule,
//    MatSelectModule,
//    MatIconModule,
    NgbModule, 
    NgbPaginationModule, 
    NgbAlertModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
