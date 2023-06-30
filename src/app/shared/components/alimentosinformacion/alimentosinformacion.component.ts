import { Component, Input, OnInit } from '@angular/core';
import { alimentos } from 'src/app/models/alimentos.models';


import { InformationPage } from 'src/app/pages/tabs/information/information.page'
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-alimentosinformacion',
  templateUrl: './alimentosinformacion.page.html',
  styleUrls: ['./alimentosinformacion.page.scss'],
})
export class AlimentosinformacionPage implements OnInit {

  @Input() alimento:alimentos;
  constructor(
    private firebaseSvc:FirebaseService,
    private utilSvc:UtilsService,
    private alimentosinfo:InformationPage
  ) { 
    
  }

  ngOnInit() {


    
  }
  
  ionViewWillEnter() {
    this.alimentosinfo.getAlimentos();
    
  
    
  }


}
