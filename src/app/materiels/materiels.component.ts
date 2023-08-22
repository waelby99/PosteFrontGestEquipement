import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Materiel } from '../models/materiels.model';
import { MaterielsService } from '../services/materiels.service';
import { Router } from '@angular/router';
import { TokrnStorageService } from '../services/tokrn-storage.service';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class MaterielsComponent implements OnInit {
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

     /* Test(){
        this.ToShow=[];
        this.list.forEach(element=>{
          if(element.etat=='En Maintenance'){
            this.selectedFILTER="En Maintenance";
            this.ToShow.push(element);
          }
        });
        console.log(this.ToShow);
      }

      Test2(){
        this.ToShow=[];
        this.list.forEach(element=>{
          if(element.etat=='En Oeuvre'){
            this.selectedFILTER="En Oeuvre";
            this.ToShow.push(element);
          }
        })
        console.log(this.ToShow);
      }

      Test3(){
        this.ToShow=[];
        this.list.forEach(element=>{
          if(element.etat=='En Controle'){
            this.selectedFILTER="En Controle";
            this.ToShow.push(element);
          }
        })
        console.log(this.ToShow);
      }
    
      onChange(x:any){
        if(x=='En Maintenance'){
          this.Test();
        }
        else if(x=='En Controle'){
          this.Test3();
        }
        else if(x=='En Oeuvre'){
          this.Test2();
        }
      }*/
}
