import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentSong
sendData(data){
this.currentSong = data
}
  songData  = [
    {src:'assets/images/img (1).jpg', songName:'Bol naa' ,  singer:'Arjit'},
    {src:'assets/images/img (2).jpg', songName:'Kchto Huaa hai' ,  singer:'Shreya'},
    {src:'assets/images/img (3).jpg', songName:'Om Santi Om' ,  singer:'Surya'},
    {src:'assets/images/img (4).jpg', songName:'Good M' ,  singer:'Sonu'},
    {src:'assets/images/img (5).jpg', songName:'Let me love you' ,  singer:'Athif'},
    {src:'assets/images/img (6).jpg', songName:'King Man' ,  singer:'Himesh'},
    {src:'assets/images/img (9).jpg', songName:'Savan Savan' ,  singer:'Getta'},
    {src:'assets/images/img (11).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (12).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (13).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (14).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (15).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (16).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (17).jpg', songName:'Barsat' ,  singer:'Lata'},
    {src:'assets/images/img (18).jpg', songName:'Barsat' ,  singer:'Lata'},
  ]
}
