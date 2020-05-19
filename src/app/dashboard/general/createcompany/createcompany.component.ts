import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {
  updateFlag = false;
  addFlag = true;
  public company = {
    name: null,
    code: null,
    color: '#fff352',
    phone: null,
    email: null,
    fax: null,
    website: null,
    country: 'Qatar',
    address1: null,
    address2: null,
    logo: null,
    header: null,
    footer: null,
    status: false,
    report: false

  };
  public countryList;

  constructor(private generalservice: GeneralService,
              private toastservice: ToastrService,
              private companyservice: CompanyService,
              private router: Router) {
                try {
                  this.company = router.getCurrentNavigation().extras.state.data;
                  console.log(this.company);
                  this.addFlag = !this.addFlag;
                  this.updateFlag = !this.updateFlag;
                } catch (error) {

                  console.log('no data');
                }
               }

  ngOnInit() {
    this.getCountryList();
  }
  async getCountryList() {
    this.countryList = await this.generalservice.getCountryList();
  }
  logoSelect(value) {
   const logo = value.target.files[0];
   const reader = new FileReader();
   reader.readAsDataURL(logo);
   reader.onload = async () => {
      this.company.logo = reader.result;
   };
  }
  headerSelect(value) {
    const header = value.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(header);
    reader.onload = async () => {
      this.company.header = await reader.result;
    };
   }
   footerSelect(value) {
    const footer = value.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(footer);
    reader.onload = async () => {
      this.company.footer = await reader.result;
    };
   }
   colorSelect(value) {
     this.company.color = value;
   }
   logoclose() {
    this.company.logo = null;
   }
   headerclose() {
    this.company.header = null;
   }
   footerclose() {
    this.company.footer = null;
   }
  async save() {
    if (this.company.name !== null &&
        this.company.code !== null &&
        this.company.phone !== null &&
        this.company.email !== null &&
        this.company.country !== null &&
        this.company.address1 !== null &&
        this.company.address2 !== null &&
        this.company.logo !== null &&
        this.company.header !== null &&
        this.company.footer !== null) {

          const respdata = await this.companyservice.addNewCompany(this.company);
          if (respdata.name === this.company.name) {
            this.toastservice.success('Company created', 'Success');
          } else {
            this.toastservice.error('Something went wrong', 'Error');
          }

        } else {
          this.toastservice.warning('Error', 'Some field missing');
        }
  }
  update() {

  }

}
