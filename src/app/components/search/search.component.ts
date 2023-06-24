import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
gVar = 'https://chat.openai.com/share/787e9fa6-2656-431a-9993-bcfd5cb45a50'
bool:boolean
images
search ='Dog'
perPage = '10'
resultData = []
showDilog
  constructor(private photos:PhotoService) {
    this.photos.getData(this.search,this.perPage).subscribe(res => this.resultData = res.photos)
  }

  searchPhoto(s,n){
    this.photos.getData(s,n)
      .subscribe(arg => {
        this.resultData = arg.photos
        console.log(this.resultData,'dddddddddddd')
      });


  }
  openLargeImg(){
    this.showDilog = true;
}
}
