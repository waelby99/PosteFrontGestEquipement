import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokrnStorageService } from '../../services/tokrn-storage.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  list:any;
  message='';
  idCom:any;
  mat:any={
    id:'',
    username:'',
    email:'',
    password:'',
    serviceIdService:''
  };
  id:any;
  user:any;
  roles:any;
  iid:any;
  
  constructor(private toastr:ToastrService,private userService:UsersService,private tokenStorageService:TokrnStorageService,private router:Router,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roles=this.tokenStorageService.getUser().roles[0];
    this.iid=this.tokenStorageService.getUser().id;
   
    this.userService.getUserById(this.iid).subscribe(
      data=>{
        this.mat=data
      }
    )
  }
  updateTutorial(): void {
   console.log(this.mat);
   this.userService.updateUser(this.iid, this.mat).subscribe( 
        response => {
          console.log(this.mat);
          console.log(response);
          this.toastr.success("Modifié correctement")
        },
        error => {
          console.log(error);
        })
  }

  newMat(): void {
    window.location.reload();
    }
}
