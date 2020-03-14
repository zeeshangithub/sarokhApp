import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

declare var $;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };
    this.fetchUsers();
  }
  
  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
  }

  fetchUsers(): void {
    console.log("tst")
    this.userService.fetchUsers().subscribe(res => {
      console.log("this.users" , res)
      this.users = res;
      console.log("this.users" , res)
    })
  }
  deleteUSer(id){

    console.log("id" , id)
    this.userService.DeleteUser(id).subscribe( res => {
      
      console.log("res" , res)
      if(res.status === 200){
        this.fetchUsers();
      }
      
      

    }) 
  }

}
