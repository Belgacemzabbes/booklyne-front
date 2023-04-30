import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'app/shared/models/user-model';
// import { UserModel } from 'app/core/models/user-model';
// import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;

    userModel: UserModel = new UserModel();

    // constructor(private authService: AuthService) { }

    constructor(private router: Router) { }
    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    login(){
        console.log("test")
        // this.authService.login(this.userModel).subscribe(data =>{
        //     console.log(data.authorisation.token)
        //     localStorage.setItem("authToken", data.authorisation.token);
        // })
        this.router.navigate(["/content/register"])
        console.log('whyyyyy')
    }

}
