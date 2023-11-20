import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { IClient } from '../models/iclient';





@Component({
  selector: 'edit-button.component',
  templateUrl: 'edit-button.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class EditButtonComponent {

  public client : IClient = {} as IClient
//Récupération de la donnée dans la modale (dans le placeholders surement), puis esuite detection de changement sur l'input et recupération de valeur en gros si vide on ne change rien

onEdit() {

}

}
