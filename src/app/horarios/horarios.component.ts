import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  artistas = [
    {palco:'Metal', horario:'10:30', nome:'Anitta', genero:'Funk', img:'https://veja.abril.com.br/wp-content/uploads/2022/04/anitta-versions-of-me.png'},
    {palco:'Músicas para acordar', horario:'16:30', nome:'Claude Debussy', genero:'Clássica', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg/250px-Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg'},
    {palco:'Pop', horario:'20:00', nome:'Haley Blais', genero:'Indie Pop', img:'http://exclaim.ca/images/Haley_Blais_-_Tatum_Maclean.jpg'},
    {palco:'Relax', horario:'18:00', nome:'ACDC', genero:'Hard Rock', img:'https://roadiecrew.com/wp-content/uploads/ACDC-SHOT-IN-THE-DARK.jpg'},
    {palco:'Sunday Morning', horario:'23:00', nome:'Massacration', genero:'Heavy Metal', img:'https://whiplash.net/imagens_promo/massacration_chroma.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
