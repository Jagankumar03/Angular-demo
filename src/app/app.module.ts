import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntityComponent } from './entity/entity.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json-service';
import { PersonPanelComponent } from '../app/person-panel/person-panel.component';
import { AddressPanelComponent } from '../app/address-panel/address-panel.component';
import { PersonListComponent } from '../app/person-panel/person-list/person-list.component';
import { PersonInfoComponent } from '../app/person-panel/person-info/person-info.component';
import { AddressInfoComponent } from '../app/address-panel/address-info/address-info.component';
import { AddressListComponent } from '../app/address-panel/address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntityComponent,
    PersonPanelComponent,
    AddressPanelComponent,
    PersonListComponent,
    PersonInfoComponent,
    AddressInfoComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
