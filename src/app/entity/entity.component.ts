import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {

  @Output() valueChange = new EventEmitter<string>();

  entity: string;
  constructor() { }

  ngOnInit() {
  }

  buttonClick(entity: string) {
    this.entity = entity;
    this.valueChange.emit(this.entity);
    console.log(this.entity);
  }
}
