import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data-service/data.service';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})

export class FavouriteListComponent implements OnInit {
  favouritesArray:Array<Object> = [];
  gifObject;

  constructor(private data:DataService) { }

  ngOnInit() {
    for(var i=0;i<this.data.LikesArray.length;i++){
      this.data.getData2(this.data.LikesArray[i]).subscribe(
        res=>{
          this.gifObject = res;
          this.favouritesArray.push(this.gifObject); 
          //console.log(res);
        }
      );
      
    }
    console.log(this.favouritesArray);
  }

  addLike(){
    
  }

}
