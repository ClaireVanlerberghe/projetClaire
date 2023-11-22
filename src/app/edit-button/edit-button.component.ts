import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { IClient } from '../models/iclient';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';






@Component({
  selector: 'edit-button.component',
  templateUrl: 'edit-button.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule],
})
export class EditButtonComponent {

  public clientId: string | number | null = null
  public client : IClient = {} as IClient
  

  constructor(
    private dataServ: DataService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { client: IClient },
    
    
    ){}
//Récupération de la donnée dans la modale (dans le placeholders surement), puis ensuite detection de changement sur l'input et recupération de valeur en gros si vide on ne change rien

ngOnInit() {
  this.activatedRoute.paramMap.subscribe((param)=>{
    this.clientId = param.get('clientId')
    console.log(this.data);
    
  });

  if(this.clientId) {
    this.dataServ.getOneClient(this.clientId).subscribe((data)=> {
      this.client = data
      })
    }
  }


onEdit() {
  
    this.dataServ.updateClient(this.data.client, this.data.client.id).subscribe(
    )}


}
