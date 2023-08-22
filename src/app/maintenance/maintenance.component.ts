import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Maintenance } from '../models/maintenance.model';
import { MaintenanceService } from '../services/maintenance.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  list=[];
  ToShow: Maintenance[]=[];
  selectedFILTER='Materiels';
  searchValue = '';
  typeMat:any;
  idMaint:any;
  mainteances?: Maintenance[];
  currentMaintenance: Maintenance = {};
  currentIndex = -1;
  
  constructor(private router:Router,private maintenaceService:MaintenanceService) { }
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
    this.maintenaceService.getAllMaintenances().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
      }
    )

  }
  detailMaint(idMaint:any){
    this.router.navigate(['maintenance/details/'+idMaint]);
  }
  addmaint(){
    this.router.navigate(['addmaint']);
  }

}
