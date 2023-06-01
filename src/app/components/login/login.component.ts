import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  constructor() {
  }
  ngAfterViewInit(): void {
    document.getElementById('id01').style.display='block';

  }
  ngOnInit(): void {
  }

}
