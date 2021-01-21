import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
@Component({
  selector: "app-addlead",
  templateUrl: "./addlead.component.html",
  styleUrls: ["./addlead.component.css"],
})
export class AddleadComponent implements OnInit {
  constructor() {}

  @ViewChild("CilentMobile") getMobile: NgForm;
  Mobilenumbool: boolean = false;
  Mobilenumlenbool: boolean = false;

  pattCilent = /[a-z A-Z !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  ngOnInit(): void {}

  ClientFormfun(ClientForm: NgForm) {
    console.log(ClientForm);
    /*
    if (this.pattCilent.test(this.getMobile.value)) {
      //console.log("error");

      this.Mobilenumbool = true;
    } else {
      console.log("NOerror");
      this.Mobilenumbool = false;
    }
*/

    const mobilespecial = this.pattCilent.test(this.getMobile.value)
      ? (this.Mobilenumbool = true)
      : (this.Mobilenumbool = false);

    const mobilelen =
      this.getMobile.value.length < 10
        ? (this.Mobilenumlenbool = true)
        : (this.Mobilenumlenbool = false);
    /*if (this.getMobile.value.length < 9) {
      this.Mobilenumlenbool = true;
    } else {
      this.Mobilenumlenbool = false;
    }*/
  }
}
