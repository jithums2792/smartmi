import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(path) {
    this.router.navigate([path]);
  }

}
