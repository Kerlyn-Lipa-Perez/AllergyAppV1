import { Component, OnInit } from '@angular/core';

import { alergias } from 'src/app/models/alergias.models';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  user = {} as User
  alergias:alergias[] = []
  loading : boolean = false;
  constructor(
    private firebaseSvc:FirebaseService,
    private utilSvc:UtilsService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getUser()
  }

  getUser(){
    return this.user = this.utilSvc.getElementFromLocalStorage('user')

  }


  getAlergias(){
    let users:User[] = this.utilSvc.getElementFromLocalStorage('user');
   
    this.loading = true;
    

  }





}
