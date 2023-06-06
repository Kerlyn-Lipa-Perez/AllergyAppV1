import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AlertController, AlertOptions, LoadingController, LoadingOptions, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { alergias } from '../models/alergias.models';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router:Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

//------------- Loading -------------
//Present
  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }
  //Dismiss
  async dismissLoading(){
    return await this.loadingController.dismiss()
  }

  setElementInLocalStorage(key:string,element:any){
    return localStorage.setItem(key,JSON.stringify(element))
  }

  getElementFromLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key))
  }

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }





  //---------- Router ----------
  routerLink(url:string){
    return this.router.navigateByUrl(url)
  }
  //-------------- Alerta -----------------
  async presentAlert(opts: AlertOptions) {
    const alert = await this.alertController.create(opts);
  
    await alert.present();
  }


  //-------------- Modal -----------------
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
  
    await modal.present();

    const {data } = await modal.onWillDismiss();

    if (data){
      return data;
    }
  }

  //-------------- dismiss -----------------
  dismisModal(data?:any){
    this.modalController.dismiss(data)

  }
  //-------------- Calcular el porcentaje para la barra de progreso -----------------
  getPorcentajeGravedad(alergia:alergias){
    //let numero=(alergia);
    //let procentaje= (numero / 10) * 100;
    //return parseInt(procentaje.toString())
  }



}
