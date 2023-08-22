import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Commande } from '../models/commande.model';
import { CommandeService } from '../services/commande.service';
import { Router } from '@angular/router';
import { TokrnStorageService } from '../services/tokrn-storage.service';
import { UsersService } from '../services/users.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  list=[];
  ToShow: Commande[]=[];
  selectedFILTER='Materiels';
  searchValue = '';

  commandes?: Commande[];
  currentCommande: Commande = {};
  currentIndex = -1;
  
  constructor(private usersService:UsersService,private commandeService:CommandeService,private router:Router,private tokenStorageService:TokrnStorageService) { }
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
  typeMat:any;
  iid:any;
  roles:any;
  list1=[];
  ToShow1: any;
  ngOnInit(): void {
    this.iid=this.tokenStorageService.getUser().id;
    console.log(this.iid)
    this.usersService.getUserCom(this.iid).subscribe(
      data=>{
        
        this.ToShow1=data;
        console.log(this.ToShow1)
        this.list1=data;
      } 
    )
    this.roles=this.tokenStorageService.getUser().roles[0];
    this.commandeService.getAllCommandes().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
      }
    )
  }
  detailMat(idCom:any){
    this.router.navigate(['commande/details/'+idCom]);
  }
  delete(idCom:any){
    this.commandeService.deleteCommande(idCom).subscribe(
      data=>{
        console.log("Supprimé");
        window.location.reload();
  })}
  addcom(){
    this.router.navigate(['addcom']);
  }
}
