import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  AfterViewInit,
} from "@angular/core";
import { NgModel, NgForm } from "@angular/forms";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"],
})
export class AdduserComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild("Mobile") Mob: NgForm;
  MobileSpecial: boolean = false;
  patt = /[a-z A-Z !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  mobilebool: boolean = false;
  getmob: any;
  emailindex: number;
  emailerr: boolean = false;

  ngAfterViewInit() {
    console.log(this.Mob.value);
  }

  ngOnInit(): void {}

  onSub(formsat: NgForm) {
    console.log(formsat);
    console.log(this.Mob.value);

    if (this.Mob.value.length < 10) {
      //console.log("eror ");
      this.mobilebool = true;
    } else {
      this.mobilebool = false;
    }

    if (this.patt.test(this.Mob.value)) {
      this.MobileSpecial = true;
    } else {
      this.MobileSpecial = false;
    }
  }

  /* mobile(even) {
    //console.log(event.target.value);
    this.getmob = even;
    //
    if (even.touched && even.value.length < 8) {
      this.mobilebool = true;
    } else {
      this.mobilebool = false;
    }


  }*/

  /*emailfun(getemail) {
    this.emailindex = getemail.value.length - 1;
    console.log(this.emailindex);
    console.log(getemail.value.endsWith("m"));
    if (getemail.value.endsWith("m") || getemail.value.endsWith("n")) {
      console.log("noerror");
      this.emailerr = false;
    } else {
      console.log("error");

      this.emailerr = true;
    }
  }*/
}
