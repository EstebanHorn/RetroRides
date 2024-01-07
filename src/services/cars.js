import datosAutos from '../data.json';

export function obtenerDatosPorAnio(anioBuscado) {
  for (var i = 0; i < datosAutos.Autos.length; i++) {
    if (String(datosAutos.Autos[i].anio) === anioBuscado) {
      return datosAutos.Autos[i];
    }
  }
  return null; // Retorna null si no se encuentra un auto con el año buscado
}
