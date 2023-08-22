import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintenance } from 'src/app/models/maintenance.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editmaint',
  templateUrl: './editmaint.component.html',
  styleUrls: ['./editmaint.component.css']
})
export class EditmaintComponent implements OnInit {

  displayedColumns: string[] = ['idMaint','datemaint','intervenant','issuede','duree','etat','remarque','materielIdMateriel'];
  list:any;
  message='';
  idMaint:any;
  mat :any;
  id:any;
  user:any;
  constructor(private toastr:ToastrService,private router:Router,private maintenanceService:MaintenanceService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idMaint=this.route.snapshot.params['idMaint'];
    this.maintenanceService.getMaterielById(this.idMaint).subscribe(
      data=>{
        this.mat=data
      }
    )
  }
  updateTutorial(): void {
   
    console.log(this.mat);
   this.maintenanceService.editMaint(this.idMaint, this.mat).subscribe( 
        response => {
          console.log(this.mat);
          console.log(response);
          this.toastr.success("Modifié correctement")
        },
        error => {
          console.log(error);});
  }
  newMat(): void {
    window.location.reload();
    }
}
