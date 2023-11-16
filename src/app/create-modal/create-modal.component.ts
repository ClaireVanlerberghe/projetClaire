import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';


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
@Component({
  selector: 'app-create-button',
  templateUrl: '../create-button/create-button.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule],
})
export class CreateButtonComponent {}
