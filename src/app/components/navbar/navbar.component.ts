import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
 
  }
  goToAirbus(){
    console.log("goToAirbus");
    this.router.navigate(['/airbus']);  }
  goToBoeing(){
    console.log("goToBoeing");
    this.router.navigate(['/boeing']);
}
goToHome(){
  this.router.navigate(['/']);
}
}
