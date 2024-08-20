import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedin: boolean = false;
  ngOnInit(): void {
    if ('pleny-token' in localStorage) {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  }
}
