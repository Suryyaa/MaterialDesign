import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-side-nav',
  templateUrl: './my-side-nav.component.html',
  styleUrls: ['./my-side-nav.component.css']
})
export class MySideNavComponent {
  menuItems = [
    {name:'Home   ',   icon:'fas fa-heart '},
    {name:'Products   ',icon:' fas fa-shower '},
    {name:'Gallery   ',icon:'fas fa-address-card '},
    {name:'About us  ',icon:' fas fa-handshake '},
  ]






  arrr = [222,'222',22,'Shiva']
  isMenuOpen:boolean;

  constructor() {
    this.isMenuOpen  = false;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  addMenu(){
    this.menuItems.push({name:'Shop',icon:''})
  }
}
