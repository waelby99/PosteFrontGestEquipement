import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiels.model';
import { MaterielsService } from 'src/app/services/materiels.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  list=[];
  ToShow: User[]=[];
  materiel: Materiel ={
    idMateriel:'',
     typeMat:'',
     marque:'',
     dateDeMiseEnOeuvre:new Date(),
     codeaBarre:0,
     emplacement:'',
     etat:'',
     remarque:'',
     userId:''
  };
  submitted = false;
  constructor(private toastr:ToastrService,private router:Router,private materielservice:MaterielsService,private userService:UsersService) { }
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
  id:any;
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
      }
    )
  }
  saveMateriel(): void {
    const materiel = {
      idMateriel: this.materiel.idMateriel,
      typeMat: this.materiel.typeMat,
      marque: this.materiel.marque,
      dateDeMiseEnOeuvre: this.materiel.dateDeMiseEnOeuvre,
      codeaBarre: this.materiel.codeaBarre,
      emplacement: this.materiel.emplacement,
      etat: this.materiel.etat,
      remarque: this.materiel.remarque,
      userId: this.materiel.userId
    };
    console.log(this.materiel)
    this.materielservice.addMater(this.materiel).subscribe(
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
