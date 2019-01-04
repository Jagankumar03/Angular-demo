import { Component, OnInit, Output, EventEmitter, DoCheck, OnDestroy } from '@angular/core';
import {JsonService } from '../../json-service';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {

@Output() rowSelected = new EventEmitter<{}>();
// @Output() addSelected = new EventEmitter(); // without using ngModel
//  isAddSelect = false;

  personList: any;
  person: Person[];
  constructor(private json: JsonService) { }

  ngOnInit () {
    this.getJsonData();
  }

  ngOnDestroy() {
  }

  getJsonData() {
    this.json.getPersonData()
    .subscribe(data => {
      this.person = <Person[]>data;
      this.rowSelected.emit(this.person[0]);
    });
  }

  rowsSelected(person) {
    this.personList = person;
    this.rowSelected.emit(this.personList);
  }

  destroy(index) {
    this.person.splice(index, 1);
  }

  onAddSelect(event) {
    this.rowSelected.emit(event.target.id);
  }
}
