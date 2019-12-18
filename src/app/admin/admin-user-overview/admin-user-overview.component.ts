import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/user.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-user-overview',
  templateUrl: './admin-user-overview.component.html',
  styleUrls: ['./admin-user-overview.component.css']
})
export class AdminUserOverviewComponent implements OnInit {
  users: [User]
  admins: [User]
  error: string;
  displayedColumns: string[] = ['email', 'isAdmin'];

  constructor( private adminService: AdminService) {
    this.loadData();
   }

  ngOnInit() {
  }

  loadData() {
    this.adminService.getUsers().subscribe(
      (data) =>{
        console.log(data);
        this.users = data['users'];
      }
    )
    this.adminService.getAdmins().subscribe(
      (data) =>{
        console.log(data);
        this.admins = data['admins'];
      }
    )
  }

  setAdmin(user){
    console.log(!user.isAdmin)
    console.log(user._id)
    this.adminService.setAdmin(user._id, !user.isAdmin).subscribe(
      resData => {
       this.loadData();
      },
      errorMessage => {
        this.error = errorMessage
        setTimeout(() => {
          this.error = null
        }, 5000);
        console.log(this.users.find(x => {
          console.log(user._id.toString())
          console.log(x.userId)
          if (x.userId.toString() === user._id.toString()){
            console.log(x)
          }
        }))
        // const user = this.users.find(x => x.userId === user._id) 
        // user.isAdmin = user.isAdmin;
        // console.log(user)
        
        //this.isLoading = false
      });
  }

  print(e){
    console.log('print')
    console.log(e)
  }

}
