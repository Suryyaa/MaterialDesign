import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
gVar = 'https://chat.openai.com/share/787e9fa6-2656-431a-9993-bcfd5cb45a50'
bool:boolean
  constructor() { }

  ngOnInit(): void {
  }
test(input){
  this.bool= true;
  this.gVar= input.value;
}
}
