import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.css']
})
export class CurrentSongComponent implements OnInit {

  constructor() { }
  @Input() getSongDetails;
  ngOnInit(): void {
  }

}
