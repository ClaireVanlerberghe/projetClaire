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
import { EditButtonComponent } from './edit-button/edit-button.component';


import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ClientPageComponent,
    MenuComponent,

    
    
    
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
    DeleteButtonComponent,
    EditButtonComponent,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    
    
    
    
  ],
  providers: [DatePipe, JsonPipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
