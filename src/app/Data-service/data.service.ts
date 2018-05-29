import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  data:any;
  public LikesArray:Array<string> = [];

  constructor(private http:HttpClient) {}

  addValue(val) {
    this.LikesArray.push(val);
  }

  getArray() {
      return this.LikesArray ;
  }
  
   //For getting the trending gifs
   getData():Observable<any>{

     let url="http://api.giphy.com/v1/gifs/trending?api_key=4L2Jc6Tr11vq22F8zNmlnCE2mHo7F6lp&limit=10";

     return this.http.get(url);
   }


   //For getting only one specific gif by passing in an id of it
   getData2(id):Observable<any>{

    let url="http://api.giphy.com/v1/gifs/"+id+"?api_key=4L2Jc6Tr11vq22F8zNmlnCE2mHo7F6lp";
    
    return this.http.get(url);
  }
   
  //Searches for gifs
  search(title):Observable<any>{

    //let url="http://api.giphy.com/v1/gifs/"+id+"?api_key=4L2Jc6Tr11vq22F8zNmlnCE2mHo7F6lp";

    let url="http://api.giphy.com/v1/gifs/search?q="+title+"&api_key=4L2Jc6Tr11vq22F8zNmlnCE2mHo7F6lp&limit=5";

    return this.http.get(url);
  }

}