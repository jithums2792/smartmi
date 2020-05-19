import { Component, OnInit } from '@angular/core';
import { ManufatureService } from 'src/app/services/manufature.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manufatures',
  templateUrl: './manufatures.component.html',
  styleUrls: ['./manufatures.component.css']
})
export class ManufaturesComponent implements OnInit {
  brandaddFlag = false;
  brandeditFlag = false;
  brandList;
  brandid;
  brand = {
    name: null,
    website: null,
    logo: null,
    active: false
  };

  constructor(private manufatureservice: ManufatureService, private toastservice: ToastrService) { }

  ngOnInit() {
    this.getAllManufature();
  }
  async getAllManufature() {
    this.brandList = await this.manufatureservice.getAllManufatures();

  }
  logoSelect(value) {
    const logo = value.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(logo);
    reader.onload = () => {
      this.brand.logo = reader.result;
    };
  }
  async save() {
    if (this.brand.name !== null &&
        this.brand.logo !== null &&
        this.brand.name !== '') {
          const respdata = await this.manufatureservice.addManufature(this.brand);
          this.toastservice.success('brand added sucessfully', 'Success');
          this.getAllManufature();
        } else {
          this.toastservice.warning('Some fields are missing', 'warning');
        }
  }
  close() {
    this.brand.name = null;
    this.brand.website = null;
    this.brand.logo = null;
    this.brand.active = false;
    this.brandaddFlag = ! this.brandaddFlag;
    this.brandeditFlag = false;
  }
  edit(data) {
    this.brandid = data._id;
    this.brand.name = data.name;
    this.brand.website = data.website;
    this.brand.logo = data.logo;
    this.brand.active = data.active;
    this.brandaddFlag = true;
    this.brandeditFlag = true;
  }
  async update() {
    if (this.brand.name !== null &&
      this.brand.logo !== null &&
      this.brand.name !== '') {
        console.log(this.brand, this.brandid);
        const respdata = await this.manufatureservice.editManufature(this.brandid, this.brand);
        this.getAllManufature();
        this.toastservice.success('brand updated sucessfully', 'Success');
        this.close();
      } else {
        this.toastservice.warning('Some fields are missing', 'warning');
      }
  }
  async delete(data) {
    const respdata =  await this.manufatureservice.deleteMAnufature(data._id);
    this.toastservice.success('brand deleted sucessfully', 'Success');
    this.getAllManufature();
  }
}
