import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { type } from 'os';
import { parse } from 'path';
import { alergias } from 'src/app/models/alergias.models';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-alergia',
  templateUrl: './add-update-alergia.component.html',
  styleUrls: ['./add-update-alergia.component.scss'],
})
export class AddUpdateAlergiaComponent implements OnInit {


  @Input() alergia:alergias;

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('',[Validators.minLength(4)]),
    descripcion: new FormControl('',[Validators.minLength(4)]),
  })
  user = {} as User
  constructor(
    private firebaseSvc:FirebaseService,
    private utilSvc:UtilsService
  ) { }

  ngOnInit() {
    this.user = this.utilSvc.getElementFromLocalStorage('user')

    if(this.alergia){
      this.form.setValue(this.alergia);
      this.form.updateValueAndValidity();

    }
  }
  /////// ========= Crear Alergia ========== ///////////
  crearAlergia(){
    let path = `users/${this.user.uid}`;
    this.utilSvc.presentLoading();
    delete this.form.value.id;
    this.firebaseSvc.addToSubColletion(path,'alergias',this.form.value).then(res =>{
      
      this.utilSvc.dismisModal({success : true});
      this.utilSvc.presentToast({
        message: 'Informacion guardada exitosamente',
        color:'success',
        icon:'checkmark-circle-outline',
        duration:1500
      })

      this.utilSvc.dismissLoading()


    },error =>{

      this.utilSvc.presentToast({
        message: error,
        color:'warning',
        icon:'alert-circle-outline',
        duration:5000
      })
      this.utilSvc.dismissLoading()

    })

  }
  //=====Crear o actulizar alergia=====//
  //----------------
  submit(){
    if(this.form.valid){
      if(this.alergia){
        this.updateAlergia()
      }else{
        this.crearAlergia();
      }

    }
  }






  // ===== Actualizar alergia    ==== //
  updateAlergia(){
    let path = `users/${this.user.uid}/alergias/${this.alergia.id}`;
    this.utilSvc.presentLoading();
    delete this.form.value.id;
    this.firebaseSvc.updateDocument(path,'alergias').then(res =>{
      
      this.utilSvc.dismisModal({success : true});
      this.utilSvc.presentToast({
        message: 'Alergia actulizada exitosamente',
        color:'success',
        icon:'checkmark-circle-outline',
        duration:1500
      })

      this.utilSvc.dismissLoading()


    },error =>{

      this.utilSvc.presentToast({
        message: error,
        color:'warning',
        icon:'alert-circle-outline',
        duration:5000
      })
      this.utilSvc.dismissLoading()

    })

  }


  







}
