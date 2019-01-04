import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { Person } from '../person.model';


@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  @Input() selectedEntity: string;
  person = new Person();
  _rowSelected: any;
  // @Input() isAddSelect: any; // without using ngModel
  // @Input() rowSelected: any; // using value type

  constructor() { }

  ngOnInit() {
  }

  // ngDoCheck() {
  //   if (this.isAddSelect === true) {
    //     this.onAddSelect();
  //   }
  // }

  // onAddSelect() {
    //   this.person = new Person();
    //   this.isAddSelect = false;
  // }

  @Input('rowSelected')

  get PersonData() {
    return this._rowSelected;
  }

  set PersonData(rowSelected: any) {
    this._rowSelected = rowSelected;
    if (typeof this._rowSelected === 'string' && this._rowSelected === 'add') {
        this.person = new Person();
    } else if (typeof this._rowSelected === 'object' && this._rowSelected) {
      this.person.id = this._rowSelected.id;
      this.person.firstName = this._rowSelected.firstName;
      this.person.lastName = this._rowSelected.lastName;
      this.person.email = this._rowSelected.email;
      this.person.isAdmin = this._rowSelected.isAdmin;
    }
  }
}
