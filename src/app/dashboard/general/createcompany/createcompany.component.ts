import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  companyId;
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
              private location: Location,
              private router: Router) {
                try {
                  const editCompany = router.getCurrentNavigation().extras.state.data;
                  this.companyId = editCompany._id;
                  this.company.name = editCompany.name;
                  this.company.code = editCompany.code;
                  this.company.color = editCompany.color;
                  this.company.phone = editCompany.phone;
                  this.company.email = editCompany.email;
                  this.company.fax = editCompany.fax;
                  this.company.website = editCompany.website;
                  this.company.country = editCompany.country;
                  this.company.address1 = editCompany.address1;
                  this.company.address2 = editCompany.address2;
                  this.company.logo = editCompany.logo;
                  this.company.header = editCompany.header;
                  this.company.footer = editCompany.footer;
                  this.company.status = editCompany.status;
                  this.company.report = editCompany.report;
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
  async update() {
    if (this.company.name !== null &&
      this.company.name !== '' &&
      this.company.code !== null &&
      this.company.code !== '' &&
      this.company.phone !== null &&
      this.company.phone !== '' &&
      this.company.email !== null &&
      this.company.email !== '' &&
      this.company.country !== null &&
      this.company.address1 !== null &&
      this.company.address1 !== '' &&
      this.company.address2 !== null &&
      this.company.address2 !== '' &&
      this.company.logo !== null &&
      this.company.header !== null &&
      this.company.footer !== null) {

        console.log(this.company);
        const respdata = await this.companyservice.editCompany(this.companyId, this.company);
        if (respdata._id === this.companyId) {
          this.toastservice.success('Company created', 'Success');
        } else {
          this.toastservice.error('Something went wrong', 'Error');
        }

      } else {
        this.toastservice.warning('Error', 'Some field missing');
      }
  }
  back() {
    this.location.back();
  }

}
