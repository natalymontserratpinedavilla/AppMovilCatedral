import { Component, OnInit } from '@angular/core';
interface Elemento{
  nombre: string;
  ruta: string;
  icono: string;
}

@Component({
  standalone: false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  elementos: Elemento[] = [
     {
      icono:'newspaper-outline',
      nombre:'Noticias',
      ruta:'/noticias'
    },
    {
      icono:'chatbubbles-outline',
      nombre:'foros',
      ruta:'/foro'
    },
    {
      icono:'images-outline',
      nombre:'galeria',
      ruta:'/galeria'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}