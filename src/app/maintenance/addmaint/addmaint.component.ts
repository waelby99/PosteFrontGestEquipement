import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Maintenance } from 'src/app/models/maintenance.model';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { MaterielsService } from 'src/app/services/materiels.service';
import { Materiel } from 'src/app/models/materiels.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addmaint',
  templateUrl: './addmaint.component.html',
  styleUrls: ['./addmaint.component.css']
})
export class AddmaintComponent implements OnInit {
  list=[];
  ToShow: Materiel[]=[];
  materiel: Maintenance ={
    idMaint:'',
    datemaint:new Date(),
    intervenant:'',
    issuede:"",
    duree:'',
    etat:'',
    remarque:'',
    materielIdMateriel:''
  };
  submitted = false;

  constructor(private toastr:ToastrService,private router:Router,private maintenanceService:MaintenanceService,private materielsService:MaterielsService) { }
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
  valeur?:5;
  idMateriel:any;
  ngOnInit(): void {
    this.materielsService.getAllMateriels().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
  })}
  saveMateriel(): void {
    const materiel = {
      idMaint: this.materiel.idMaint,
      datemaint: this.materiel.datemaint,
      intervenant: this.materiel.intervenant,
      issuede: this.materiel.issuede,
      duree: this.materiel.duree,
      etat: this.materiel.etat,
      remarque: this.materiel.remarque,
      materielIdMateriel: this.materiel.materielIdMateriel
    };
    console.log(this.materiel)
    this.maintenanceService.addMat(this.materiel).subscribe(
        materiel => {
          console.log(materiel);
          this.submitted = true;
          this.toastr.success("Ajouté correctement")
        },
        error => {
          console.log(error);
          this.toastr.error("Veuillez resaisir les champs correctement!")
        });
    }
    newMat(): void {
      window.location.reload();
      }
      displayStyle = "none";
      openPopup() {
        this.displayStyle = "block";
      }
      closePopup() {
        this.displayStyle = "none";
      }
}
