import { Component, OnInit, ViewChild } from "@angular/core";

import { NgModel, NgForm } from "@angular/forms";

@Component({
  selector: "app-add-user-form",
  templateUrl: "./add-user-form.component.html",
  styleUrls: ["./add-user-form.component.css"],
})
export class AddUserFormComponent implements OnInit {
  showmorebool: boolean = false;
  showmoretext: string = "less";
  @ViewChild("LeadNumber") usernumber: NgForm;
  pattuser = /[a-z A-Z !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  usermobilespecialbool: boolean = false;
  usermobilelenbool: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  AddMore(getElement) {
    /* if (getElement.nextSibling.style.display === "block") {
      getElement.nextSibling.style.display = "none";
    } else {
      getElement.nextSibling.style.display = "block";
    }*/

    const addmoretoggle =
      getElement.nextSibling.style.display === "block"
        ? (getElement.nextSibling.style.display = "none")
        : (getElement.nextSibling.style.display = "block");
  }

  ShowMore() {
    this.showmorebool = !this.showmorebool;
  }

  LeadFormSubmit(getleadForm) {
    if (getleadForm.valid) {
      console.log(getleadForm);
    }

    const usermobilespecial = this.pattuser.test(this.usernumber.value)
      ? (this.usermobilespecialbool = true)
      : (this.usermobilespecialbool = false);

    const usermobilelength =
      this.usernumber.value.length < 10
        ? (this.usermobilelenbool = true)
        : (this.usermobilelenbool = false);
  }
}
