import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPageComponent } from './client-page/client-page.component';
import { MenuComponent } from './menu/menu.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


import { CreateModalComponent } from './create-modal/create-modal.component';
import { EditButtonComponent } from './client-table/client-table.component';
import { FormsModule, NgModel } from '@angular/forms';
//ne pas oublier d'importer delete button



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ClientPageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientTableComponent,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    CreateModalComponent,
    EditButtonComponent,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
