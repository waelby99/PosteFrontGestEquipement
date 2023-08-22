import { Component, OnInit } from '@angular/core';
import { faTrashAlt,faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Materiel } from '../models/materiels.model';
import { MaterielsService } from '../services/materiels.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ctrltechnique',
  templateUrl: './ctrltechnique.component.html',
  styleUrls: ['./ctrltechnique.component.css']
})
export class CtrltechniqueComponent implements OnInit {
  typeMat:any;

  list=[];
  ToShow: Materiel[]=[];
  selectedFILTER='Materiels';
  searchValue = '';
  etat='';
  materiels?: Materiel[];
  currentMateriel: Materiel = {};
  currentIndex = -1;
  
  constructor(private router:Router,private materielsService:MaterielsService) { }
  faTrashAlt = faTrashAlt;
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

  ngOnInit(): void {
    
    this.materielsService.getMatEnd().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
      }
    )
  }
  delete(idMaint:any){
    this.materielsService.deleteMat(idMaint).subscribe(
      data=>{
        console.log("Supprimé");
        window.location.reload();
      },
      
    )
  }
  detailMat(idMateriel:any){
    this.router.navigate(['materiel/details/'+idMateriel]);
  }
}
