import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';
import { TokrnStorageService } from 'src/app/services/tokrn-storage.service';
import { getLocaleDateFormat } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addcom',
  templateUrl: './addcom.component.html',
  styleUrls: ['./addcom.component.css']
})
export class AddcomComponent implements OnInit {

  commande: Commande ={
    idCom:'',
     typeCM:'',
     dateCommande:'',
     etatdecom:'',
     remarque:'',
     userId:''
  };
  submitted = false;
  constructor(private datepipe: DatePipe,private toastr:ToastrService,private router:Router,private commandeservice:CommandeService,private tokenstorage:TokrnStorageService) { }
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
  id:any;
  year:any;
  month:any;
  day:any;
  hour:any;
  minuyes:any;
  currentDateTime:any

  ngOnInit(): void {
    this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    this.commande.dateCommande= this.currentDateTime;
    console.log(this.currentDateTime); 
    this.commande.idCom=5;
    this.commande.userId=this.tokenstorage.getUser().id;
    
  
  }
  saveCommande(): void {
    const commande = {
      idCom: this.commande.idCom,
      typeCM: this.commande.typeCM,
      dateCommande: this.commande.dateCommande,
      etatdecom: this.commande.etatdecom,
      remarque: this.commande.remarque,
      userId: this.commande.userId
    };
    console.log(this.commande)
    this.commandeservice.addComm(this.commande).subscribe(
        commande => {
          console.log(commande)
          this.submitted = true;
          console.log(commande)
          this.toastr.success("Ajouté correctement")
        }
    )}
  newMat(): void {
    //window.location.reload();
    }
 
}
