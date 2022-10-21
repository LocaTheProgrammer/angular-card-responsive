import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalCardComponent } from './components/modal-card/modal-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NamePipe } from './pipe/name.pipe';
import { AddDrugFormComponent } from './components/add-drug-form/add-drug-form.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalCardComponent,
    HomepageComponent,
    DynamicTableComponent,
    NamePipe,
    AddDrugFormComponent,
    SelectComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
