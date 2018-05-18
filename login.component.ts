import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http-handler.service';
import {map} from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string = "/login";

    constructor(private route: ActivatedRoute, private router: Router, private http: HttpService) { }

    ngOnInit() {
        // reset login status
        this.model.username = "";
        this.model.password = "";
        // if (localStorage.getItem('currentUserN')) {
        //   this.http.logout().subscribe(
        //     data => {
        //       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/calculator';
        //         }
        //     );
        // }
        //this.http.logout();
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    }

    login() {
      this.http.login(this.model.username, this.model.password).subscribe(res => { // Success
        console.log(res.json());
        localStorage.setItem('currentUserN', res.json().username);
        this.router.navigate(['/home']);
      });
    }
}