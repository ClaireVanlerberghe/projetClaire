// import { Component } from "@angular/core";
// import { MatButtonModule } from "@angular/material/button";
// import { MatDialogModule } from "@angular/material/dialog";
// import { IClient } from "../models/iclient";
// import { DataService } from "../service/data.service";
// import { ActivatedRoute } from "@angular/router";


// @Component({
//     selector: 'app-edit-button',
//     templateUrl: '../edit-button/edit-button.component.html',
//     standalone: true,
//     imports: [MatDialogModule, MatButtonModule],
//   })
  
//   export class EditButtonComponent {
  
//     public clients: any;
//     public col:string[] = [
//       "id",
//       "nom",
//       "prenom",
//       "nomPDG",
//       "email",
//       "adressePostale",
//       "ville",
//       "typeClient",
//       "dateCreation",
//       "edition",
//       "suppression"
//   ]
  
//   public clientId : string | number | null = null
//       public client : IClient = {} as IClient
  
//     constructor(public dataServ: DataService, private activatedRoute: ActivatedRoute) {}
  
    
    
  
//     ngOnInit() {
//       this.activatedRoute.paramMap.subscribe((param) => {
//         this.clientId = param.get('clientId')
        
//         })
  
//     if(this.clientId) {
//       this.dataServ.getOneClient(this.clientId).subscribe((id) => {
//         this.client = id
//         console.log(this.clientId);
        
//       })
  
    
//       this.dataServ.getOneClient(this.clientId).subscribe((data: IClient) => {
        
//         this.client = data;
//       })
//       this.col
  
//     }
  
//   }
//   }
  