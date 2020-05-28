import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  movie : Object;
  title;

  onSubmit(){
    console.log('calling api with title' + this.title);
    this.apiService.getMovies(this.title).subscribe(res => this.movie = res);
  }

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    
  }



}
