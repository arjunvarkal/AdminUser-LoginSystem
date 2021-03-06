import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.model' ;
import { UsersService } from '../users.service' ;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService : UsersService) { }


    users:IUser[] ;

  ngOnInit() {
    this.users = this.userService.getUsers() ;
  }



}

/*
{
      username : "Arjun",
      email    : "test@email.com",
      phonenumber :1234567890,
      phonenumbeer :1234567890
    },
    {
      username : "Vijay",
      email    : "test1@email.com",
      phonenumber :2345678901,
      phonenumbeer :1234567890
    },
    {
      username : "Pavan",
      email    : "test2@email.com",
      phonenumber :3456789012,
      phonenumbeer :1234567890
    }
    */