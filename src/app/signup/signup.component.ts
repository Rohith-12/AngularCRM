import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  mobilebool:boolean=false;
  MobileSpecial:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  SignUpsubmit(get:NgForm){



  
  if(get.valid){


//   this.http.post("http://127.0.0.1:4000/api/v1/AddUser",get.value).subscribe( (ele) => {


//   console.log(ele)

//  })

  this.http.post("http://127.0.0.1:8000/create/",get.value).subscribe( ele => {


  console.log(ele)

 })
    console.log(get)


  }
  
  }


}
