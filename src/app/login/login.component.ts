import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { User } from "app/model/user.model";
import { AuthService } from "app/services/auth.service";

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
      Validators.minLength(6)
    ]),
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  handleLogin(): void {
    const user: User = new User();
    user.email = this.formModel.email.value;
    user.password = this.formModel.password.value;
    this.authService.login(user);
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
