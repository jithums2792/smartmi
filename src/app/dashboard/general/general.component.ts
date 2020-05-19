import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  public sidenavList = [
    {name: 'General preferences', discription: 'Change your date, time and more..', icon: 'la-layer-group'},
    {name: 'Companies', discription: 'Creat company, edit and more..', icon: 'la-building',url: 'dashboard/general/home/company'},
    {name: 'Dashboard', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Leads', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Orders', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Quotes', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Reports', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Products', discription: 'Change your date, time and more..', icon: 'la-building', url: 'dashboard/general/home/productsattributes'},
    {name: 'Projects', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Customers', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Users', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'KPI', discription: 'Change your date, time and more..', icon: 'la-building'},
    {name: 'Shedule & Task', discription: 'Change your date, time and more..', icon: 'la-building'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(path) {
    this.router.navigate([path]);
  }
}
