import { Component, OnInit } from '@angular/core';
import { MaterielsService } from 'src/app/services/materiels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiels.model';
import { TokrnStorageService } from '../../services/tokrn-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  displayedColumns: string[] = ['idMateriel','typeMat','marque','dateDeMiseEnOeuvre','codeaBarre','emplacement','etat','remarque','userId'];
  list:any;
  message='';
  idMateriel:any;
  mat :any;
  id:any;
  user:any;
  roles:any;
  constructor(private toastr:ToastrService,private tokenStorageService:TokrnStorageService,private router:Router,private materielsService:MaterielsService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roles=this.tokenStorageService.getUser().roles[0];
    this.idMateriel=this.route.snapshot.params['idMateriel'];
    this.materielsService.getMaterielById(this.idMateriel).subscribe(
      data=>{
        this.mat=data
      }
    )
    }
  
  updateTutorial(): void {
   
    console.log(this.mat);
   this.materielsService.editMater(this.idMateriel, this.mat).subscribe( 
        response => {
          console.log(this.mat);
          console.log(response);
          this.toastr.success("Modifié correctement")
        },
        error => {
          console.log(error);
          
        });
      }
  
  
}
