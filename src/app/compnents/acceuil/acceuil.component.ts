import { Component, OnInit,AfterContentInit, Output,AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokrnStorageService } from '../../services/tokrn-storage.service';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare const clock:any;
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  isLoading:boolean=false;
  duration=5;
  f:any;
  form:any={
    username:'',
    password:''
  };
  isLoggedIn=false;
  isLoginFailed=false;
  errorMessage='';
  roles:string[]=[];
  username:any;
  test:any;
  welcomeName:any;

  constructor(private authService:AuthService,private tokenStorage:TokrnStorageService,private toastr:ToastrService) { }

  ngOnInit(): void {
    setTimeout(()=>this.isLoading=true,1500)
    if(this.tokenStorage.getToken()){
      this.isLoggedIn=true;
      this.roles=this.tokenStorage.getUser().roles;
      this.welcomeName=this.tokenStorage.getUser().username;
    }
  }
  onTest(event:Event){
    if(event.target){
      this.test='login'
      window.sessionStorage.removeItem('test');
      window.sessionStorage.setItem('test',this.test); 
      window.location.reload();
 
    }
  }
  onSubmit():void{
    const{username,password}=this.form;
    this.authService.login(username,password).subscribe(
      data=>{
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed=false;
        this.isLoggedIn=true;
        this.roles=this.tokenStorage.getUser().roles;
        console.log(this.welcomeName)
        this.reloadPage();
        
      },error=>{
        console.log(error)
        this.toastr.error("Veuillez vérifier vos coordonnées")
      }
    );
  }
  reloadPage():void{
    window.location.reload();
  }
}
