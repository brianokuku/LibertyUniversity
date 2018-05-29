import { Component, OnInit } from '@angular/core';
//import {HttpClient, Response, RequestOptions, Headers} from '@angular/common/http';
import { DataService } from '../Data-service/data.service';
import {HttpClient} from '@angular/common/http';
//import {IFavourite} from './IFavourite.model';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})

export class FavouriteComponent implements OnInit {
  gifsArray;
  searchForm:FormGroup; //Form to search for ideas

  constructor(private fb:FormBuilder, private data:DataService, private router:Router) {
    this.searchForm=this.fb.group({
      'title':['']
    })
   }

   search(){
     
       let title=this.searchForm.controls.title.value;
       title=title?title:0;
      
       this.data.search(title).subscribe(
         (res)=>{
           this.gifsArray=res;
         }
       )
   }

  ngOnInit() {
    this.data.getData().subscribe(
      res=>{
        this.gifsArray = res; 
        console.log(res);
      }
    );
  }

}
