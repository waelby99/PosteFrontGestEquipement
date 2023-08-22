import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AcceuilComponent } from './compnents/acceuil/acceuil.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PannesComponent } from './pannes/pannes.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { UsersComponent } from './users/users.component';
import { CtrltechniqueComponent } from './ctrltechnique/ctrltechnique.component';
import { DetailsComponent } from './materiels/details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './materiels/add/add.component';
import { EditComponent } from './materiels/edit/edit.component';
import { AproposComponent } from './apropos/apropos.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { DetailuserComponent } from './users/detailuser/detailuser.component';
import { AddcomComponent } from './commandes/addcom/addcom.component';
import { DetailcomComponent } from './commandes/detailcom/detailcom.component';
import { EditcomComponent } from './commandes/editcom/editcom.component';
import { AddmaintComponent } from './maintenance/addmaint/addmaint.component';
import { EditmaintComponent } from './maintenance/editmaint/editmaint.component';
import { DetailsmaintComponent } from './maintenance/detailsmaint/detailsmaint.component';
import { InfoserviceComponent } from './afterlogin/infoservice/infoservice.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { ModifserviceComponent } from './afterlogin/modifservice/modifservice.component';

const routes: Routes = [{path:"acceuil",component:AcceuilComponent},

{path:"matadmin",component:SignupComponent},
{path:"detailservice/:idService",component:InfoserviceComponent},
{path:"",component:AfterloginComponent},
{path:"materiel",component:MaterielsComponent},
{path:"commandes",component:CommandesComponent},
/*{path:"**",pathMatch: 'full',component:PannesComponent},*/
{path:"maintenance",component:MaintenanceComponent},
{path:"users",component:UsersComponent},
{path:"ctrltech",component:CtrltechniqueComponent},
{path:"materiel/details/:idMateriel",component:DetailsComponent},
{path:"addmat",component:AddComponent},
{path:"navbar",component:NavbarComponent},
{path:"materiel/details/editmat/:idMateriel",component:EditComponent},
{path:"apropos",component:AproposComponent},
{path:"adduser",component:AdduserComponent},
{path:"user/details/:id",component:DetailuserComponent},
{path:"addcom",component:AddcomComponent},
{path:"commande/details/:idCom",component:DetailcomComponent},
{path:"commande/details/editcom/:idCom",component:EditcomComponent},
{path:"addmaint",component:AddmaintComponent},
{path:"maintenance/details/:idMaint",component:DetailsmaintComponent},
{path:"maintenance/details/editmaint/:idMaint",component:EditmaintComponent},
{path:"useredit/:id",component:EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
