import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Direction } from '../models/direction.model';
import { Service } from '../models/service.model';
import { ServService } from '../services/serv.service';
import { Maintenance } from '../models/maintenance.model';
import { Router } from '@angular/router';
import { Materiel } from '../models/materiels.model';
import { MaterielsService } from '../services/materiels.service';
import { MaintenanceService } from '../services/maintenance.service';
import { Commande } from '../models/commande.model';
import { CommandeService } from '../services/commande.service';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { TokrnStorageService } from '../services/tokrn-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
  list=[];
  list1=[];
  list2=[];
  ToShow: Direction[]=[];
  ToShow1: Service[]=[];
  ToShow2: Materiel[]=[];
  ToShow3: Maintenance[]=[];
  ToShow4: Commande[]=[];
  ToShow5: User[]=[];
  service: Service ={
    idService:'',
    nomService:'',
    directionIdDirection:'', 
  };
  ToShow6:Materiel[]=[];
  ToShow7:Materiel[]=[];
  ToShow8:Commande[]=[];
  ToShow9:Maintenance[]=[];
 
  ToShow10:any;
  ToShow11:any;
  ToShow12:any;

  selectedFILTER='Materiels';
  searchValue = '';
  servicess: Service[]=[];

  directions?: Direction[];
  currentDirection: Direction = {};

  services?:Service[];
  currentService: Service = {};
  
  currentIndex = -1;
  materiel : any;
  mat :any;
  idDirection: any;
  submitted = false;
  constructor(private toastr:ToastrService,private usersService:UsersService,private tokenStorageService:TokrnStorageService,private maintenanceService:MaintenanceService,private commandeService:CommandeService,private userService:UsersService,private materielService:MaterielsService,private servService:ServService,private router:Router) { }
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
  count:any;
  count1:any;
  count2:any;
  count3:any;
  count4:any;
  count5:any;
  count6:any;
  count7:any;
  count8:any;
  count9:any;
  count10:any;
  etat:any;
  roles:any;
  iid:any;
  matss:any
  ngOnInit(): void {
    
    this.iid=this.tokenStorageService.getUser().id;
   // console.log(this.iid)
   this.materielService.getMatPan().subscribe(
     data11=>{
       this.ToShow12=data11;
       this.count10 = Object.keys(this.ToShow12).length;
     }
   )
   this.usersService.getUserCom(this.iid).subscribe(
    data10=>{
      this.ToShow11=data10;
    } 
  )
    this.usersService.getUserMat(this.iid).subscribe(
      data9=>{
        this.ToShow10=data9;
        console.log(this.ToShow10);
      } 
    )

    this.roles=this.tokenStorageService.getUser().roles[0];
    this.maintenanceService.getMaintenanceEnCours().subscribe(
      data8=>{
        this.ToShow9=data8;
        this.count7 = Object.keys(this.ToShow9).length;
      }
    )
    this.commandeService.getCommande().subscribe(
      data7=>{
        this.ToShow8=data7;
        this.count6 = Object.keys(this.ToShow8).length;
      }
      )
    this.materielService.getMatMant().subscribe(
      data6=>{
        this.ToShow7=data6;
        this.count5 = Object.keys(this.ToShow7).length
      }
    ) 
    this.materielService.getMatEnd().subscribe(
      data5=>{
        this.ToShow6=data5;
        this.count4 = Object.keys(this.ToShow6).length
      }
    ) 
    this.maintenanceService.getAllMaintenances().subscribe(
      data4=>{
        this.ToShow3=data4;
        this.count3 = Object.keys(this.ToShow3).length
      }
    )
    this.userService.getAllUsers().subscribe(
      data3=>{
        this.ToShow5=data3;
        this.count2 = Object.keys(this.ToShow5).length
      }
    )
    this.commandeService.getAllCommandes().subscribe(
      data2=>{
        this.ToShow4=data2;
        this.count1 = Object.keys(this.ToShow4).length;})
    

    this.materielService.getAllMateriels().subscribe(
      data1=>{
        this.ToShow2=data1;
        this.count = Object.keys(this.ToShow2).length;})

    this.servService.getAllDirecServ().subscribe(
      data=>{
        console.log(data)
        this.ToShow=data;
        this.list=data;
      
      }
    )
     this.materielService.getDirectionById(1).subscribe(
      materiel=>{
        console.log(this.mat)
        this.mat=materiel;
      }
    )
    this.service.idService=1;
    this.service.directionIdDirection=1;
  }
  detailSer(idService:any){
    this.router.navigate(['detailservice/'+idService]);
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  displayStyle1 = "none";
  
  openPopup1() {
    this.displayStyle1 = "block";
  }
  closePopup1() {
    this.displayStyle1 = "none";
  }

  updateTutorial(): void {
   
    
   this.servService.updateDirection(1,this.mat).subscribe( 
        response => {
          console.log(this.mat);
          console.log(response);
          this.toastr.success("Modifié correctement")
        },
        error => {
          console.log(error);
        });
        window.location.reload();} 
        
        saveCommande(): void {
          const service = {
            idService: this.service.idService,
            nomService: this.service.nomService,
            directionIdDirection: this.service.directionIdDirection,
            
          };
          console.log(this.service)
          this.servService.addService(this.service).subscribe(
            service => {
                console.log(service)
                this.submitted = true;
                console.log(service)
                this.toastr.success("Ajouté correctement")
              }
          )}       
  
}
