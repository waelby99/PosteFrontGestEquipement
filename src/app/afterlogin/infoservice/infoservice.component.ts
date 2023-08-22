import { Component, OnInit } from '@angular/core';
import { faEdit,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Service } from 'src/app/models/service.model';
import { ServService } from 'src/app/services/serv.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastrService } from 'ngx-toastr';

@Component({

  selector: 'app-infoservice',
  templateUrl: './infoservice.component.html',
  styleUrls: ['./infoservice.component.css']
})
export class InfoserviceComponent implements OnInit {
  list:any;
  idService: any;
  service : any;

  constructor(private toastr:ToastrService,public servService:ServService,public route: ActivatedRoute,public router: Router) { }
  faHome = faHome;
  faUser = faUser;
  faTools = faTools;
  faCopy = faCopy;
  faToolbox = faToolbox;
  faCalendarcheck = faCalendarCheck;
  faQuestion = faQuestion;
  faSearch = faSearch;
  faUserCog = faUserCog;
  faSignOutAlt = faSignOutAlt;
  faSmileBeam = faSmileBeam;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faTrash = faTrash;
  faInfoCircle = faInfoCircle;
  faEdit = faEdit;

  serv :any;
  cont:any;
  id:any;
  user:any;
  
  ngOnInit(): void {
    this.route.params.subscribe(router =>{
      this.idService=this.route.snapshot.params['idService'];
    })
    this.servService.getAllServUser(this.idService).subscribe(
      service=>{
        this.serv=service;
        console.log(this.serv)
      }
    )
  }
  edit(idService:any){
    this.router.navigate(['materiel/details/editmat/'+idService]);
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  updateTutorial(): void {
   
    console.log(this.serv);
   this.servService.updateService(this.idService,this.serv).subscribe( 
        response => {
          console.log(this.serv);
          console.log(response);
          this.toastr.success("Modifié correctement")
        },
        error => {
          console.log(error);
        });window.location.reload();}

}
