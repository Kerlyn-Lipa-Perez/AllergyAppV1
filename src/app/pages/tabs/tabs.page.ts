import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { alergias } from 'src/app/models/alergias.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateAlergiaComponent } from 'src/app/shared/components/add-update-alergia/add-update-alergia.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  alergias:alergias[] = []

  constructor(    
    private firebaseSvc:FirebaseService,
    private utilSvc:UtilsService) { }

  ngOnInit() {
  }

  AddOrUpdateAlergias(alergia?:alergias){
    this.utilSvc.presentModal({
      component: AddUpdateAlergiaComponent,
      componentProps:{alergia},
      cssClass:'add-update-modal'
    })
  }
  getAlergias(){
    let users:User = this.utilSvc.getElementFromLocalStorage('user')
    let path= `users/${users.uid}`
    this.firebaseSvc.getSubColletion(path,'alergias').subscribe({
      next:(res) =>{
        console.log(res);
      }
    })
  }

}
