import { Component, OnInit } from '@angular/core';


import { alimentos } from 'src/app/models/alimentos.models';
import { User } from 'src/app/models/user.model';

import { UtilsService } from 'src/app/services/utils.service';
import { AlimentosinformacionPage } from 'src/app/shared/components/alimentosinformacion/alimentosinformacion.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  user = {} as User
  alimentos:alimentos[] = [
    {
      "id": "1",
      "title": "Alimento para celiacos",
      "descripcion": "Alimento diseñado específicamente para personas con enfermedad celíaca",
      "sintomas": "Diarrea, dolor abdominal, pérdida de peso",
      "tratamiento": "Dieta libre de gluten",
      "causas": ["Consumo de alimentos con gluten"],
      "prevencion": "Evitar el consumo de alimentos que contengan gluten",
      "consejosEstiloVida": "Leer las etiquetas de los alimentos cuidadosamente, evitar la contaminación cruzada",
      "recursosAdicionales": [
        "https://www.celiac.org",
        "https://www.glutenfreeliving.com"
      ]
    },
    {
      "id": "2",
      "title": "Alimento para diabéticos",
      "descripcion": "Alimento especialmente formulado para personas con diabetes",
      "sintomas": "Aumento de la sed, micción frecuente, fatiga",
      "tratamiento": "Control de la ingesta de carbohidratos y azúcares",
      "causas": ["Desregulación del nivel de azúcar en la sangre"],
      "prevencion": "Mantener una alimentación saludable y equilibrada, controlar los niveles de azúcar en la sangre",
      "consejosEstiloVida": "Hacer ejercicio regularmente, consultar con un médico y nutricionista especializado",
      "recursosAdicionales": [
        "https://www.diabetes.org",
        "https://www.diabeteseducator.org"
      ]
    },
    {
      "id": "3",
      "title": "Alimento para alérgicos a los lácteos",
      "descripcion": "Producto sin lactosa diseñado para personas con alergia o intolerancia a los lácteos",
      "sintomas": "Hinchazón, diarrea, náuseas",
      "tratamiento": "Evitar el consumo de lácteos y optar por alternativas sin lactosa",
      "causas": ["Reacción alérgica a la proteína de la leche o intolerancia a la lactosa"],
      "prevencion": "Leer las etiquetas de los alimentos, elegir productos sin lactosa",
      "consejosEstiloVida": "Explorar alternativas de origen vegetal como leches de almendra, soja o arroz",
      "recursosAdicionales": [
        "https://www.foodallergy.org",
        "https://www.lactose.org"
      ]
    },
    {
      "id": "4",
      "title": "Alimento para alérgicos al marisco",
      "descripcion": "Producto libre de mariscos diseñado para personas con alergia al marisco",
      "sintomas": "Picazón en la piel, urticaria, dificultad para respirar",
      "tratamiento": "Evitar el consumo de mariscos y productos que lo contengan",
      "causas": ["Reacción alérgica a proteínas específicas presentes en el marisco"],
      "prevencion": "Leer las etiquetas de los alimentos, evitar la contaminación cruzada",
      "consejosEstiloVida": "Informar a los restaurantes sobre la alergia, llevar consigo un autoinyector de adrenalina",
      "recursosAdicionales": [
        "https://www.foodallergy.org",
        "https://www.allergyuk.org"
      ]
    },
    {
      "id": "5",
      "title": "Alimento para vegetarianos",
      "descripcion": "Producto elaborado sin ingredientes de origen animal para personas que siguen una dieta vegetariana",
      "sintomas": "No aplica",
      "tratamiento": "Dieta basada en alimentos de origen vegetal",
      "causas": ["Elección personal de seguir una dieta sin carne"],
      "prevencion": "Seleccionar alimentos vegetales ricos en nutrientes, asegurar una ingesta adecuada de proteínas y vitaminas",
      "recursosAdicionales": [
        "https://www.vegetariantimes.com",
        "https://www.vegansociety.com"
      ]
    },
    {
      "id": "6",
      "title": "Alimento para hipertensos",
      "descripcion": "Producto bajo en sodio diseñado para personas con hipertensión arterial",
      "sintomas": "No aplica",
      "tratamiento": "Control de la ingesta de sodio y adopción de una dieta saludable",
      "causas": ["Factores genéticos y estilo de vida poco saludable"],
      "prevencion": "Reducir el consumo de alimentos procesados, aumentar la ingesta de frutas y verduras",
      "consejosEstiloVida": "Realizar ejercicio regularmente, evitar el consumo excesivo de alcohol",
      "recursosAdicionales": [
        "https://www.heart.org",
        "https://www.mayoclinic.org"
      ]
    },
    {
      "id": "7",
      "title": "Alimento para alérgicos al gluten",
      "descripcion": "Producto libre de gluten diseñado para personas con alergia o intolerancia al gluten",
      "sintomas": "Malestar abdominal, diarrea, fatiga",
      "tratamiento": "Dieta libre de gluten",
      "causas": ["Reacción alérgica al gluten"],
      "prevencion": "Evitar el consumo de alimentos que contengan gluten",
      "consejosEstiloVida": "Leer las etiquetas de los alimentos, buscar alternativas sin gluten",
      "recursosAdicionales": [
        "https://www.gluten.org",
        "https://www.celiac.org"
      ]
    },
    {
      "id": "8",
      "title": "Alimento para personas con enfermedad renal",
      "descripcion": "Producto bajo en sodio y potasio diseñado para personas con enfermedad renal",
      "sintomas": "Retención de líquidos, fatiga, cambios en la micción",
      "tratamiento": "Control de la ingesta de sodio, potasio y proteínas",
      "causas": ["Enfermedad renal crónica"],
      "prevencion": "Seguir una dieta adecuada para la enfermedad renal, controlar la presión arterial",
      "consejosEstiloVida": "Limitar la ingesta de alimentos procesados, mantenerse hidratado",
      "recursosAdicionales": [
        "https://www.kidney.org",
        "https://www.niddk.nih.gov"
      ]
    },

    
  ]
  loading : boolean = false;
  constructor(
    private utilSvc:UtilsService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.getUser()
    this.getAlimentos();
    
  }

  getUser(){
    return this.user = this.utilSvc.getElementFromLocalStorage('user')

  }


  getAlimentos(){
    
    this.loading = true;
    for (let index = 0; index < this.alimentos.length; index++) {
      const element = this.alimentos[index];
    }
    

  }


  //Boton abrir mas informacion de las alergias

  async abrirBoton(alimentos?:alimentos){
    let res = await this.utilSvc.presentModal({
      component:AlimentosinformacionPage,
      componentProps: {alimentos},
      cssClass:'alimentosinformacion'
    })
    if (res && res.success){
      this.getAlimentos();
    }
  }






}
