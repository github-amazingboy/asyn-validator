import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvfnComponent } from './avfn/avfn.component';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { PasswordSameDirective } from './directives/password-same.directive';
import { CustomAsyncValidatorFnComponent } from './custom-async-validator-fn/custom-async-validator-fn.component';

@NgModule({
  declarations: [
    AppComponent,
    AvfnComponent,
    PasswordSameDirective,
    CustomAsyncValidatorFnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
