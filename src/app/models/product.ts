export class Product {
  id!: number;
  nombre!: string;
  foto!: string;
  precio_mayor!: number;
  precio_menor!: number;

  constructor() {}

  getNombre() {
    return this.nombre;
  }

  getFoto() {
    return this.foto;
  }

  getPrecioMenor(){
    return this.precio_menor;
  }

  getPrecioMayor(){
    return this.precio_mayor;
  }

}
