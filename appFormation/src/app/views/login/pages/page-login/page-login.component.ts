import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = "Login";
    this.subtitle = "Login";
  }

  public login(user: User): void {
    // this.os.add(order).subscribe(data => {
    //   console.log(data);
    //   this.router.navigate(['orders']);
    // })
    this.router.navigate(['home']);
  }
}
