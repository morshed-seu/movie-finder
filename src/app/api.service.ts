import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlPrefix = 'http://www.omdbapi.com/?t=';
  private urlSuffix = '&apikey=71b0f398';

  getMovies(name : string){
    return this.http.get(this.urlPrefix + name + this.urlSuffix);
  }
  constructor(private http : HttpClient) { }
}
