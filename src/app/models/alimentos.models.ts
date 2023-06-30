export interface alimentos{
    id:string,
    title:string,
    descripcion:string,
    sintomas:string,
    tratamiento:string,
    causas:string[],
    prevencion:string,
    consejosEstiloVida?: string,
    recursosAdicionales?: string[],

}