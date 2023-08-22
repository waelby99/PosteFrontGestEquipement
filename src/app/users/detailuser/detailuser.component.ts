import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielsService } from 'src/app/services/materiels.service';
import { faEdit,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { ServService } from 'src/app/services/serv.service';
import { TokrnStorageService } from 'src/app/services/tokrn-storage.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
  
  displayedColumns: string[] = ['id','username','email','password','roles','serviceIdService'];
  list:any;
  id: any;
  user : any;
  constructor(private tokenstorage:TokrnStorageService,public servService:ServService,public materielsService:MaterielsService,public usersService:UsersService,public route: ActivatedRoute,public router: Router) { }
  faEdit = faEdit;
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

  mat :any;
  cont:any;
  idMateriel:any;
  materiel:any;
  idService:any;
  service:any;
  rid:any;;
  roless:any;
  com:any;
  map:any
  roles:any;
  ngOnInit(): void {
    
    this.route.params.subscribe(router =>{
      this.id=this.route.snapshot.params['id'];
  })
  //this.roles=this.tokenstorage.getUser().roles[0];
    //console.log(this.roles);
  this.usersService.getUserCom(this.id).subscribe(
    commande=>{
      this.com=commande;
      console.log(this.com)
    }
  )
  this.usersService.getUserMat(this.id).subscribe(
    materiel=>{
      this.map=materiel;
      console.log(this.map)
    }
  )
  this.usersService.getUserById(this.id).subscribe(
    userss=>{
      this.mat=userss;
      this.idService=userss.serviceIdService;
      this.servService.getServiceById(this.idService).subscribe(
        service=>{
          this.service=service.nomService;
          console.log(this.service)
        }
      )
      /*
      this.rid=userss.roles.id;
      
      this.usersService.getAllUser(this.rid).subscribe(
          roless=>{
            console.log(this.roless)
            this.roless=roless.name;
            console.log(this.roless)
          }
      )*/   
    },
    error => {
      console.log(error);
    });
}

}

