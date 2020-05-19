import { Component, OnInit } from '@angular/core';
import {  ToastrService } from 'ngx-toastr';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})

export class UnitsComponent implements OnInit {
  addFlag = true;
  unitid;
  unitList;
  unit = {
    name: null,
    symbol: null
  };
  constructor(private toastservice: ToastrService, private unitservice: UnitsService) { }

  ngOnInit() {
    this.getAllUnits();
  }
  async getAllUnits() {
    this.unitList = await this.unitservice.getAllUnit();
  }
  async add() {
    if (this.unit.name !== null &&
        this.unit.symbol !== null) {
          try {
          const respdata = await this.unitservice.addNewUnit(this.unit);
          await this.getAllUnits();
          this.toastservice.success('unit added successfully', 'success');
          this.close();
          } catch (error) {
            this.toastservice.error('something wrong', 'Error');
          }
        } else {
          this.toastservice.warning('some fields are missing', 'warning');
        }
  }
  edit(editunit) {
    this.addFlag = false;
    this.unitid = editunit._id;
    this.unit.name = editunit.name;
    this.unit.symbol = editunit.symbol;
  }
  async delete(unit) {
    try {
    const respdata = await this.unitservice.deleteUnit(unit._id);
    await this.getAllUnits();
    this.toastservice.success('unit delete successfully', 'success');
    } catch (error) {
      this.toastservice.error('something wrong', 'Error');
    }
  }
  close() {
    this.addFlag = true;
    this.unit.name = null;
    this.unit.symbol = null;
  }
  async update() {
    if (this.unit.name !== null &&
      this.unit.symbol !== null &&
      this.unit.name !== '' &&
      this.unit.symbol !== '') {
        try {
        const respdata = await this.unitservice.editUnit(this.unitid, this.unit);
        await this.getAllUnits();
        this.toastservice.success('unit updated successfully', 'success');
        this.close();
        } catch (error) {
          this.toastservice.error('something wrong', 'Error');
        }
      } else {
        this.toastservice.warning('some fields are missing', 'warning');
      }
  }

}
