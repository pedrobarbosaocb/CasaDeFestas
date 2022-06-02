import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  artistas = [
    {data:'03/06', palco:'Metal', horario:'10:30', nome:'Anitta', genero:'Funk', img:'https://veja.abril.com.br/wp-content/uploads/2022/04/anitta-versions-of-me.png'},
    {data:'03/06', palco:'Músicas para acordar', horario:'16:30', nome:'Claude Debussy', genero:'Clássica', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg/250px-Claude_Debussy_ca_1908%2C_foto_av_F%C3%A9lix_Nadar.jpg'},
    {data:'04/06', palco:'Pop', horario:'20:00', nome:'Haley Blais', genero:'Indie Pop', img:'http://exclaim.ca/images/Haley_Blais_-_Tatum_Maclean.jpg'},
    {data:'04/06', palco:'Relax', horario:'18:00', nome:'ACDC', genero:'Hard Rock', img:'https://roadiecrew.com/wp-content/uploads/ACDC-SHOT-IN-THE-DARK.jpg'},
    {data:'04/06', palco:'Sunday Morning', horario:'23:00', nome:'Massacration', genero:'Heavy Metal', img:'https://whiplash.net/imagens_promo/massacration_chroma.jpg'},
    {data:'04/06', palco:'Favela', horario:'20:30', nome:'Danny Bond e Doja Cat', genero:'Pop Funk', img:'https://s2.glbimg.com/9c0hAKIkPSbrYaxjlCik19sOBJE=/31x0:982x720/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/9/2/hoJdgiQ5eICpaLoBualQ/danny-bond-e-doja-cat.jpg'},
    {data:'05/06', palco:'Cults', horario:'12:00', nome:'Rincon Sapiência', genero:'Hip-Hop / Rap', img:'https://imagens.brasil.elpais.com/resizer/w80wcKmp7mQPX0TxnMpUi3C1SnY=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/URJJREOG27P3LI7QYKEUIVTEOU.jpg'},
    {data:'05/06', palco:'Coffee Break', horario:'10:00', nome:'The Dave Brubreck Quartet', genero:'Jazz', img:'https://80minutos.com.br/img/artist/4/4412.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


