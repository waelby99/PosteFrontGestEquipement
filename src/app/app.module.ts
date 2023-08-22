import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './compnents/acceuil/acceuil.component';
import { SignupComponent } from './signup/signup.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { UsersComponent } from './users/users.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PannesComponent } from './pannes/pannes.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
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
import { DetailsmaintComponent } from './maintenance/detailsmaint/detailsmaint.component';
import { EditmaintComponent } from './maintenance/editmaint/editmaint.component';
import { InfoserviceComponent } from './afterlogin/infoservice/infoservice.component';
import { ModifserviceComponent } from './afterlogin/modifservice/modifservice.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { authInterceptorProviders } from './helpers/auth_interceptor';
import { EdituserComponent } from './users/edituser/edituser.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SignupComponent,
    AfterloginComponent,
    UsersComponent,
    MaterielsComponent,
    CommandesComponent,
    PannesComponent,
    MaintenanceComponent,
    CtrltechniqueComponent,
    DetailsComponent,
    NavbarComponent,
    AddComponent,
    EditComponent,
    AproposComponent,
    AdduserComponent,
    DetailuserComponent,
    AddcomComponent,
    DetailcomComponent,
    EditcomComponent,
    AddmaintComponent,
    DetailsmaintComponent,
    EditmaintComponent,
    InfoserviceComponent,
    ModifserviceComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
      enableHtml:true,
      timeOut:5000   
    }),
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [authInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
