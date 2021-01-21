import { Component, OnInit } from "@angular/core";
import { NgModel, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  Login(getLogin: NgForm) {
    //console.log(getLogin);
  }

  LoginToCrm(clickedform: NgForm) {
    console.log(clickedform);

    if (clickedform.valid) {
      this.route.navigate(["/AddUser"]);
    }
  }
}
