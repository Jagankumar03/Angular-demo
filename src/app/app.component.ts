import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() selectedEntity = 'person';

  constructor() { }

  onSelectEntity(event) {
    this.selectedEntity = event;
  }
}
