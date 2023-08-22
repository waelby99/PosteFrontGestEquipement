import { Component, OnInit } from '@angular/core';
import { faHeartBroken,faWrench,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
/*import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';*/
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokrnStorageService } from '../services/tokrn-storage.service';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { MaterielsService } from '../services/materiels.service';
import { Direction } from'../models/direction.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  /*user:User;*/

  ToShow: Direction[]=[];
  selectedFILTER='Materiels';
  searchValue = '';

  materiels?: Direction[];
  currentMateriel: Direction = {};
  currentIndex = -1;
  typeMat = '';
  displayedColumns: string[] = ['idDirection','nomDirection'];
  list:any;
  idMateriel: any;
  materiel : any;
  mat :any;
  
  constructor(private toastr: ToastrService,private tokenstorage:TokrnStorageService,private materielService:MaterielsService,private tokenStorageService:TokrnStorageService, private router:Router) {
    
  }
  faHeartBroken = faHeartBroken;
  faWrench = faWrench;
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
   idDirection:any;
   roles:any;
   iid:any;
   ffff:any
  ngOnInit(): void {
    

    
   
    console.log(this.mat)
    this.roles=this.tokenStorageService.getUser().roles[0];
    console.log(this.roles);
    this.materielService.getDirectionById(1).subscribe(
      materiel=>{
        console.log(this.mat)
        this.mat=materiel;
      }
    )
  }
  detailMat(){
    this.iid=this.tokenStorageService.getUser().id;
    this.router.navigate(['useredit/'+this.iid]);
  }
  logout(): void {
    
    this.tokenStorageService.signOut();
    
    window.location.reload();
  }
}
