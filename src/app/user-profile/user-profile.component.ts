import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formModelUserInfo = {
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required]),
    surname: new FormControl("", [Validators.required]),
  }

  formModelPassword = {
    password: new FormControl("", [Validators.required]),
    newPassword: new FormControl("", [Validators.required]), 
  }



  constructor() { }

  ngOnInit() {
  }

  handleSaveUserInfo() {
    console.log(this.formModelUserInfo.username.value)
    console.log(this.formModelUserInfo.email.value)
    console.log(this.formModelUserInfo.name.value)
    console.log(this.formModelUserInfo.surname.value)
  }

  handleSavePassword() {
    console.log(this.formModelPassword.password.value)
    console.log(this.formModelPassword.newPassword.value)
  }

}
