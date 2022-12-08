import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechConvertComponent } from './speech-convert/speech-convert.component';
import { TemplateDrivenComponent } from './forms-test/template-driven/template-driven.component';
import { FormsComponent } from './forms-test/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechConvertComponent,
    TemplateDrivenComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
