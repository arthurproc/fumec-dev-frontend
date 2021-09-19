import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formModel = {
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^(?=(?:.?[A-Z]){1})(?=(?:.?[0-9]){2})(?=(?:.?[!@#$%()+^&}{:;?.]){1})(?!.\s)[0-9a-zA-Z!@#$%;(){}+^&]*$/)
    ]),
  };

  constructor() {}

  ngOnInit(): void {}

  handleLogin(): void {
    console.log(this.formModel.email.value);
    console.log(this.formModel.password.value);
  }

  getErrorMessage(modelName) {
    if (this.formModel.hasOwnProperty(modelName)) {
      if (this.formModel[modelName].hasError("required")) {
        return "You must enter a value";
      }
      return this.formModel[modelName].hasError("email")
        ? "Not a valid email"
        : "";
    }
  }
}
