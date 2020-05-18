import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  public companyLList = [];

  constructor(private router: Router, private companysevice: CompanyService) { }

  ngOnInit() {
    this.getAllCompany();
  }
  getAllCompany() {
    this.companysevice.getAllCompany().subscribe(data => this.companyLList = data);
  }
  edit(company) {
    const option: NavigationExtras = {
      state: {data: company}
    };
    this.router.navigate(['dashboard/general/createcompany'], option);
  }
  navigate(path) {
    this.router.navigate([path]);
  }

}
