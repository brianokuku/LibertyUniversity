import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data-service/data.service';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourite-single',
  templateUrl: './favourite-single.component.html',
  styleUrls: ['./favourite-single.component.css']
})
export class FavouriteSingleComponent implements OnInit {

  gifsArraySingle;
  theId;
  feedback:String;

  constructor(private data:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
      this.theId = params['id'];
    });

    this.data.getData2(this.theId).subscribe(
      res=>{
        this.gifsArraySingle = res; 
        console.log(res);
      }
    );
  }

  addLike(){
    //Loop through the array to check if it contains it

    for(var i=0;i<this.data.LikesArray.length;i++){
      if(this.data.LikesArray[i]===this.theId){
        //Run feedback method and then exit
        console.log(this.data.LikesArray[i]);
        console.log(this.theId);
        this.feedback = "Already Favourited :)"
        return;
      }
    }
    this.feedback = "Added to favourites";
    this.data.LikesArray.push(this.theId);
    //Add a method to show notification of added
  }


}
