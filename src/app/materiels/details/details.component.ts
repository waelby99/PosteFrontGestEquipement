import { Component, OnInit } from '@angular/core';
import { faEdit,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Materiel } from 'src/app/models/materiels.model';
import { MaterielsService } from 'src/app/services/materiels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';
import { TokrnStorageService } from '../../services/tokrn-storage.service';

interface materiel{
  idMateriel:any,
   typeMat:'',
   marque:'',
   dateDeMiseEnOeuvre:any,
   codeaBarre:any,
   emplacement:'',
   etat:'',
   remarque:'',
   userId:any
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayedColumns: string[] = ['idMateriel','typeMat','marque','dateDeMiseEnOeuvre','codeaBarre','emplacement','etat','remarque','userId'];
  list:any;
  idMateriel: any;
  materiel : any;
  
  constructor(private tokenStorageService:TokrnStorageService,public servService:ServService,public materielsService:MaterielsService,public route: ActivatedRoute,public router: Router) { }
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
  //Materiel:Materiel[]=[];
  mat :any;
  cont:any;
  id:any;
  user:any;
  sep:any;
  roles:any;
  ngOnInit(): void {
    this.roles=this.tokenStorageService.getUser().roles[0];
    
    this.route.params.subscribe(router =>{
      this.idMateriel=this.route.snapshot.params['idMateriel'];
    }) 
    this.materielsService.getMaintUser(this.idMateriel).subscribe(
      service=>{
        this.sep=service;
        console.log(this.sep)
      }
    )
  
    this.materielsService.getMaterielById(this.idMateriel).subscribe(
      materiel=>{
        this.mat=materiel;
        this.id=materiel.userId;
        this.materielsService.getUserById(this.id).subscribe(
          user=>{
            this.user=user.username;
            console.log(this.user)
          }
        )
      },
      error => {
        console.log(error);
      });
  }
  edit(idMateriel:any){
    this.router.navigate(['materiel/details/editmat/'+idMateriel]);
  }
}
