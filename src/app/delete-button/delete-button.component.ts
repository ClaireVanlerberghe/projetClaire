

//Bouton du tableau qui ouvre la modale pour modifier client;

import { Component, Inject, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { DataService } from "../service/data.service"
import { Router } from "@angular/router"
import { IClient } from "../models/iclient"

// @Component({
//   selector: 'app-edit-button',
//   templateUrl: '../edit-button/edit-button.component.html',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
// })

// export class EditButtonComponent {



// }



//Bouton du tableau qui ouvre la modale pour supprimer client;

@Component({
    selector: 'app-delete-button',
    templateUrl: '../delete-button/delete-button.component.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule],
})
export class DeleteButtonComponent {
    constructor(
        private dataServ: DataService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: { client: IClient }
    ) { }

    onDelete() {
        this.dataServ.deleteClient(this.data.client.id).subscribe()
    }
}

