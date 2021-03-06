import { Component, OnInit, Injectable, Input } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from '@angular/router';
import { SimpleRestApiService } from './service/simple-rest-api-service';
import { RestConstants } from './service/RestConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent{
  title = 'Aplikacija za računanje IAAF bodova';
  author = "Dario Sindičić, AK Maksimir, 2018."

  private loginIn : boolean = false;

  private username : string;

  constructor(private restService : SimpleRestApiService) {
    
    if(sessionStorage.getItem("userId") != "null") {
      this.loginIn = true;
      this.username = sessionStorage.getItem("username");
    }
    console.log(this.loginIn);
  }
  public static getUserId() : number {
      if(sessionStorage.getItem("userId") != "null") {
        return Number(sessionStorage.getItem("userId"));
      } else {
        return -1;
      }
  }
  login() {
    
    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;

    this.restService.getUrlServiceWithParams(RestConstants.CHECK_USER, 
                      {username : username,
                      password : password}).subscribe(
                    (res : number) => {
                      if(res != -1) {
                        sessionStorage.setItem("userId", res.toString());
                        sessionStorage.setItem("username", username);
                        location.reload(); 
                        this.loginIn = true;
                        this.username = sessionStorage.getItem("username");
                        
                      } else {
                        alert("Login nije uspio");
                      }
                    }
    );
  }
  logout() {
    sessionStorage.setItem("userId", null);
    sessionStorage.setItem("username", null);
    this.loginIn = false;
    this.username = null;
    location.reload(); 
  }
}
