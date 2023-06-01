import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  constructor(private bd : DataService) { }

  ngOnInit(): void {
    console.log(this.bd.getData())
  }

}
