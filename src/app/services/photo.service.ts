import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const token  = 'blPU66XyEPttZWhHRWZPGbbrH6ID1fPAbPRZkHbNitMjugEht8QQc1of'
const headers = new HttpHeaders({

  'Authorization':  token
});
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) {


   }
   getData(search,perPage): Observable<any>{
    const url = 'https://api.pexels.com/v1/search?query='+search+'&per_page='+perPage;
    return this.http.get(url,{headers})
   }
}
