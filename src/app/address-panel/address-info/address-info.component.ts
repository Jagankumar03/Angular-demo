import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address.model';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  @Input() selectedEntity: string;
  // @Input() rowSelected: any;
  address = new Address();
  _rowSelected: any;

  constructor() { }

  ngOnInit() {
  }

  @Input('rowSelected')
  get AddressData() {
    return this._rowSelected;
  }

  set AddressData(rowSelected: any) {
    this._rowSelected = rowSelected;
    if (typeof this._rowSelected === 'string' && this._rowSelected === 'add') {
            this.address = new Address();
      } else if (this._rowSelected) {
      this.address.street = this._rowSelected.street;
      this.address.city = this._rowSelected.city;
      this.address.postalCode = this._rowSelected.postalCode;
    }
  }
}


// set PersonData(rowSelected: any) {
//   this._rowSelected = rowSelected;
//   if (typeof this._rowSelected === 'string' && this._rowSelected === 'add') {
//       this.person = new Person();
//   } else if (this._rowSelected) {
//     this.person.id = this._rowSelected.id;
//     this.person.firstName = this._rowSelected.firstName;
//     this.person.lastName = this._rowSelected.lastName;
//     this.person.email = this._rowSelected.email;
//     this.person.isAdmin = this._rowSelected.isAdmin;
//   }
// }
