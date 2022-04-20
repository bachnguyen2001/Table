import { Component } from '@angular/core';
import users from './users.json'
import {user} from './interface/user'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  public userList:user[] = users;
  selectSort = ['id', 'firstName', 'lastName', 'email', 'birthday', 'salary']
  selectedField!:string
 
}
