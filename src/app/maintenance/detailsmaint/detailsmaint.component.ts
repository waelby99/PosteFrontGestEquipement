import { Component, OnInit } from '@angular/core';
import { faEdit,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Maintenance } from 'src/app/models/maintenance.model';
import { MaterielsService } from 'src/app/services/materiels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';
import { MaintenanceService } from'src/app/services/maintenance.service';


@Component({
  selector: 'app-detailsmaint',
  templateUrl: './detailsmaint.component.html',
  styleUrls: ['./detailsmaint.component.css']
})
export class DetailsmaintComponent implements OnInit {
  displayedColumns: string[] = ['idMaint','datemaint','intervenant','issuede','duree','etat','remarque','materielIdMateriel'];
  list:any;
  idMaint: any;
  maintenance : any;
  constructor(public maintenanceService:MaintenanceService,public materielsService:MaterielsService,public route: ActivatedRoute,public router: Router) { }
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
  idMateriel:any;
  materiel:any;
  user:any;
  etat:any;
  disble:any;
  ngOnInit(): void {
    this.route.params.subscribe(router =>{
      this.idMaint=this.route.snapshot.params['idMaint'];
    })
    /*if(this.etat=="Maintenance Termine") {
    this.disble=true;
    }*/
      this.maintenanceService.getMaterielById(this.idMaint).subscribe(
      materiel=>{
        this.mat=materiel;
        this.idMateriel=materiel.materielIdMateriel;
        this.materielsService.getMaterielById(this.idMateriel).subscribe(
          user=>{
            this.user=" "+user.typeMat+"  "+user.marque+"  ";
            
            console.log(this.user)
          }
        )
      },
      error => {
        console.log(error);
      });
  }
  edit(idMaint:any){
    this.router.navigate(['maintenance/details/editmaint/'+idMaint]);
  }
}
