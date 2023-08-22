import { Component } from '@angular/core';
import {TokrnStorageService} from './services/tokrn-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn=false;
  title = 'Bousta';
  constructor(private tokenStorageService:TokrnStorageService){
  }
  ngOnInit():void {   
   this.isLoggedIn=!!this.tokenStorageService.getToken();
    if(this.isLoggedIn){
      const user=this.tokenStorageService.getUser();  
    }
  }
}
