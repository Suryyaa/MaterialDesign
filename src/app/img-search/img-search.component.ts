import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-img-search',
  templateUrl: './img-search.component.html',
  styleUrls: ['./img-search.component.css']
})
export class ImgSearchComponent  {

  constructor(public imgService: PhotoService){
    imgService.selectedImages = 'assets/images/img (3).jpg';
  }

}
