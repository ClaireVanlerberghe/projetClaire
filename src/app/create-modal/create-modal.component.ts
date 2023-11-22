//import Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//import Material
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

//import service et model
import { DataService } from '../service/data.service';
import { IClient } from '../models/iclient';


//Pour ouvrir la modal

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, FormsModule,
    ReactiveFormsModule,],
})
export class CreateModalComponent {

 

  constructor(public dialog: MatDialog
    
              
    ) {}

  
    openDialog() {
      const dialogRef = this.dialog.open(CreateButtonComponent);
        
          
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
        }
 
}

//Pour enregistrer client

@Component({
  selector: 'app-create-button',
  templateUrl: '../create-button/create-button.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule],
})
export class CreateButtonComponent {

  public client : IClient = {} as IClient

  constructor(private dataServ: DataService, private router: Router, private datePipe: DatePipe) {}
  

  
  onCreate() {
    this.client.dateCreation = new Date();

   
    console.log(this.client.dateCreation);
    
    
    this.dataServ.createClient(this.client).subscribe(() =>{
      
      this.dataServ.getAllClient()

    })
  }

}
