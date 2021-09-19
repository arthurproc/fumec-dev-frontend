import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  formModelInviteAgentInfo = {
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    accountType: new FormControl("", [Validators.required]),
  }

  constructor() { }

  ngOnInit() {
  }

  handleSendInvite() {
    console.log(this.formModelInviteAgentInfo.name.value)
    console.log(this.formModelInviteAgentInfo.email.value)
    console.log(this.formModelInviteAgentInfo.accountType.value)

  }

}
