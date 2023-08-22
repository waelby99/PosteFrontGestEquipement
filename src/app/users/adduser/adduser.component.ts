import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ServService } from 'src/app/services/serv.service';
import { Service } from 'src/app/models/service.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  list=[];
  ToShow: Service[]=[];
  form : any={
    username:null,
    email:null,
    password:null,
    roles:null,
    serviceIdService:null
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  aze:string[]=[];
  idService:any;
  constructor(private toastr:ToastrService,private userService:UsersService,private servService:ServService) { }

  ngOnInit(): void {
    this.servService.getAllServ().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
      }
    )
  }
  onSubmit(): void {
    
    const { username, email, password , roles ,serviceIdService } = this.form;
    this.aze.push(roles)
    console.log(this.aze)
    
    this.userService.SignUp(username, email, password,this.aze,serviceIdService).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.toastr.success("Ajouté correctement")
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.toastr.error("Veuillez resaisir vos données correctement")
      }
    );
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
    
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
