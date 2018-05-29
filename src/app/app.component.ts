import { Component } from '@angular/core';
import { DataService } from './Data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //title = 'app';

  constructor(private data:DataService) { }
}
