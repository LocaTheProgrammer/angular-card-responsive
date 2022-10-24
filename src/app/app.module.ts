import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NamePipe } from './pipe/name.pipe';
import { AddDrugFormComponent } from './components/add-drug-form/add-drug-form.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCardComponent,
    HomepageComponent,
    DynamicTableComponent,
    NamePipe,
    AddDrugFormComponent,
    SelectComponent,
    ButtonCustomComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
