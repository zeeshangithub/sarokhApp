import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { DataService } from '../../../services/data.service';

declare var $;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // @Output() messageEvent = new EventEmitter<string>();
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  users: any;
  message;

  showlisting: boolean = true;
  constructor(private userService: UserService,
    private data: DataService) { }

  ngOnInit(): void {

    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };
    this.fetchUsers();
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
  }

  fetchUsers(): void {
    console.log("tst")
    if(localStorage.getItem('role') === 'admin'){
      this.userService.fetchAdminUsers().subscribe(res => {
        console.log("this.users", res)
        this.users = res;
        console.log("this.users", res)
      })
    }else if(localStorage.getItem('role') === 'dealer'){
      const id = localStorage.getItem('id');
      this.userService.fetchDealerUsers(id).subscribe(res => {
        console.log("this.users", res)
        this.users = res;
        console.log("this.users", res)
      })
    }else if(localStorage.getItem('role') === 'shipper'){
      const id = localStorage.getItem('id');
      this.userService.fetchShipperUsers(id).subscribe(res => {
        console.log("this.users", res)
        this.users = res;
        console.log("this.users", res)
      })
    }
 
  }

  deleteUSer(id) {
    console.log("id", id)
    this.userService.DeleteUser(id).subscribe(res => {
      console.log("res", res)
      if (res.status === 200) {
        this.fetchUsers();
      }
    })
  }
  showaddnew(e: boolean) {
    this.showlisting = e;
  };
  editUuser(id, e: boolean) {
    this.showlisting = e;

    this.data.setID(id);
  }

}
