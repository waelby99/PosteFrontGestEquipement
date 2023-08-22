import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Materiel } from '../models/materiels.model';
import { MaterielsService } from '../services/materiels.service';
import { Router } from '@angular/router';
import { TokrnStorageService } from '../services/tokrn-storage.service';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  typeMat:any;
  list=[];
  ToShow: Materiel[]=[];
  selectedFILTER='';
  searchValue = '';

  materiels?: Materiel[];
  currentMateriel: Materiel = {};
  currentIndex = -1;
  
  list1=[];
  ToShow1: any;


  constructor(private usersService:UsersService,private tokenStorageService:TokrnStorageService,private router:Router,private materielsService:MaterielsService) { }
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
  element:any;
  roles:any;
  iid?:number;
  ngOnInit(): void {
  
    this.iid=this.tokenStorageService.getUser().id;
    console.log(this.iid)
    this.usersService.getUserMat(this.iid).subscribe(
      data=>{
        
        this.ToShow1=data;
        console.log(this.ToShow1)
        this.list1=data;
      } 
    )
    this.roles=this.tokenStorageService.getUser().roles[0];
    this.materielsService.getAllMateriels().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
        var count = Object.keys(this.ToShow).length;
  console.log(count);
      }
    )
    
    
  }
  detailMat(idMateriel:any){
    this.router.navigate(['materiel/details/'+idMateriel]);
  }
  addmat(){
    this.router.navigate(['addmat']);
  }
  searchTitle(): void {
    this.currentMateriel = {};
    this.currentIndex = -1;
    this.materielsService.getMaterielByType(this.typeMat).subscribe(
        data => {
          this.materiels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }

     
}