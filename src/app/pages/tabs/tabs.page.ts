import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { alergias } from 'src/app/models/alergias.models';
import { alimentos } from 'src/app/models/alimentos.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateAlergiaComponent } from 'src/app/shared/components/add-update-alergia/add-update-alergia.component';
import { AlimentosinformacionPage } from 'src/app/shared/components/alimentosinformacion/alimentosinformacion.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  alergias:alergias[] = []
  alimentos:alimentos[] = []

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
   abrirBoton(alimentos?:alimentos){
    this.utilSvc.presentModal({
      component:AlimentosinformacionPage,
      componentProps: {alimentos},
      cssClass:'alimentosinformacion'
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
