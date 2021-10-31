import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-invite-agent',
  templateUrl: './invite-agent.component.html',
  styleUrls: ['./invite-agent.component.css']
})
export class InviteAgentComponent implements OnInit {

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
