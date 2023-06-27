import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  data:any;
showDilog
  constructor(private psApiSercie : PhotoService) {

  }

  searchPhoto(imageType:any,count:any){
    this.psApiSercie.getData(imageType,count).subscribe((response)=>{
      this.data=response.photos;
    })
  }

  updateImageInService(rul){
    this.psApiSercie.selectedImages = rul;
  }
}
