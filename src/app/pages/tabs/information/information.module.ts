import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPageRoutingModule } from './information-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationPage } from './information.page';
import { AlimentosinformacionPage } from 'src/app/shared/components/alimentosinformacion/alimentosinformacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPageRoutingModule,
    FormsModule,
    SharedModule

  ],
  declarations: [InformationPage]
})
export class InformationPageModule {}
