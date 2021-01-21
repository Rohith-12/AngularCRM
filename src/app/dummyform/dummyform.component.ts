import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Title} from '@angular/platform-browser';

import {HttpClient, HttpClientModule} from '@angular/common/http';

import {NgForm} from "@angular/forms"
 

@Component({
  selector: 'app-dummyform',
  templateUrl: './dummyform.component.html',
  styleUrls: ['./dummyform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class DummyformComponent implements OnInit {

  constructor(private http:HttpClient) { }
  showDetails: boolean;
  ngOnInit(): void {
  }
 
  fo(form:NgForm){
console.log("kk")
    console.log(form.value)
this.http.post("https://form-5cf5c.firebaseio.com/post.json",form.value).subscribe(ele => {

console.log(ele)

})

  }


}
