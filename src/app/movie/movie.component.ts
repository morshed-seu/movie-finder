import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movies } from '../movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  suggestions : Array<Object>;

  getSuggestions(){
    var index:number = 0;
    for(index = 0; index < Movies.length; index++){
     // console.log(Movies[index]);
      this.apiService.getMovies(Movies[index]).subscribe(item => this.suggestions.push(Object(item)));
    }
   // console.log(...this.suggestions);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.suggestions = new Array<Object>();
    this.getSuggestions();
  }

}
