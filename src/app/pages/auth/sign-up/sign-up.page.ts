import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl(''),
  });
  constructor(
    private firebaseSvc:FirebaseService,
    private utilsSvc: UtilsService
  ) {}

  ngOnInit() {
    this.confirmPasswordValidator()
  }

  confirmPasswordValidator() {
    this.form.controls.confirmpassword.setValidators([
      Validators.required,
      CustomValidators.matchValues(this.form.controls.password),
    ]);

    this.form.controls.confirmpassword.updateValueAndValidity();
  }
  submit() {
    if (this.form.valid) {
      

      this.utilsSvc.presentLoading({message: 'Registrando...'})
      this.firebaseSvc.sigUp(this.form.value as User).then(async(res) => {
        console.log(res);

        await this.firebaseSvc.updateUsers({displayName:this.form.value.name})

        let user:User ={
          uid:res.user.uid,
          name: res.user.displayName,
          email:res.user.email
        } 
        this.utilsSvc.setElementInLocalStorage('user',user)
        this.utilsSvc.routerLink('/tabs/home')

        this.utilsSvc.dismissLoading();
        this.utilsSvc.presentToast({
          message:`Bienvenido ${user.name}`,
          duration:1500,
          icon:'person-outline'
        })

        this.form.reset();
      },error =>{
        this.utilsSvc.dismissLoading();
        this.utilsSvc.presentToast({
          message:error,
          duration:1500,
          color: 'warning',
          icon:'alert-circle-outline'
        })
        
      })
    }
  }
}
