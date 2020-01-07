import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { IUser } from '../user.model' ;


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() users = IUser;
  selectedUser:IUser ;
  constructor() { }


  ngOnInit() {
    
  }
  onSelect(user:IUser):void{
    this.selectedUser = user ;
  }

}
