import { Component, OnInit } from '@angular/core';
import { faEdit,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Commande } from 'src/app/models/commande.model';
import { MaterielsService } from 'src/app/services/materiels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokrnStorageService } from '../../services/tokrn-storage.service';
import { CommandeService } from 'src/app/services/commande.service';
interface commande{
  idCom:any,
     typeCM:'',
     dateCommande:any,
     etatdecom:'',
     remarque:'',
     userId:any
}
@Component({
  selector: 'app-detailcom',
  templateUrl: './detailcom.component.html',
  styleUrls: ['./detailcom.component.css']
})
export class DetailcomComponent implements OnInit {
  displayedColumns: string[] = ['idCom','typeCM','dateCommande','etatdecom','remarque','userId'];
  list:any;
  idCom: any;
  commande : any;

  constructor(private tokenStorageService:TokrnStorageService,public commandeService:CommandeService,public materielsService:MaterielsService,public route: ActivatedRoute,public router: Router) { }
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
  id:any;
  user:any;
  roles:any;
  ngOnInit(): void {
    this.roles=this.tokenStorageService.getUser().roles[0];
    this.route.params.subscribe(router =>{
      this.idCom=this.route.snapshot.params['idCom'];
    })   //this.getMateriel(this.route.snapshot.params.idMateriel);
    this.commandeService.getComById(this.idCom).subscribe(
      commande=>{
        this.mat=commande;
        this.id=commande.userId;
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
  editcom(idCom:any){
    this.router.navigate(['commande/details/editcom/'+idCom]);
  }

}
