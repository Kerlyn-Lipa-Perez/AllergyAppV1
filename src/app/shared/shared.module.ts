import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AddUpdateAlergiaComponent } from './components/add-update-alergia/add-update-alergia.component';
import { AlimentosinformacionPage } from './components/alimentosinformacion/alimentosinformacion.component';

@NgModule({
  declarations: [HeaderComponent, CustomInputComponent, LogoComponent,AddUpdateAlergiaComponent,AlimentosinformacionPage],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    NgCircleProgressModule,
    AddUpdateAlergiaComponent,
    AlimentosinformacionPage
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
})
export class SharedModule {}
