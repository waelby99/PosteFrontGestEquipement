import { Component, OnInit } from '@angular/core';
import { faInfoCircle,faTrash,faChevronRight,faChevronLeft,faSmileBeam,faSignOutAlt,faUserCog,faSearch,faToolbox,faCalendarCheck,faCopy,faTools,faUser,faHome,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list=[];
  ToShow: User[]=[];
  selectedFILTER='Users';
  searchValue = '';
  typeMat:any;

  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  

  constructor(private router:Router,private usersService:UsersService) { }
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
    this.usersService.getAllUsers().subscribe(
      data=>{
        this.ToShow=data;
        this.list=data;
      }
    )
  }
  detailuser(id:any){
    this.router.navigate(['user/details/'+id]);
  }
  adduser(){
    this.router.navigate(['adduser']);
  }
}
