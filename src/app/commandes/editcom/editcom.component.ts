import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokrnStorageService } from '../../services/tokrn-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editcom',
  templateUrl: './editcom.component.html',
  styleUrls: ['./editcom.component.css']
})
export class EditcomComponent implements OnInit {
  displayedColumns: string[] = ['idCom','typeCM','dateCommande','etatdecom','remarque','userId'];
  list:any;
  message='';
  idCom:any;
  mat :any;
  id:any;
  user:any;
  roles:any;
  constructor(private toastr:ToastrService,private tokenStorageService:TokrnStorageService,private router:Router,private commandeService:CommandeService,public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roles=this.tokenStorageService.getUser().roles[0];
    this.idCom=this.route.snapshot.params['idCom'];
    this.commandeService.getComById(this.idCom).subscribe(
      data=>{
        this.mat=data
      }
    )
  }
  updateTutorial(): void { 
    console.log(this.mat);
   this.commandeService.updateCom(this.idCom, this.mat).subscribe( 
        response => {
          console.log(this.mat);
          console.log(response);
          this.toastr.success("Modifié correctement")
        },
        error => {
          console.log(error);
        });
  }
  newMat(): void {
    window.location.reload();
    }
}
