import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ObservableComponent } from './behavioural/observable/observable.component';
import { ObserverTypescriptComponent } from './behavioural/observer-typescript/observer-typescript.component';
import { StrategyComponent } from './behavioural/strategy/strategy.component';
import { DecoratorComponent } from './structural/decorator/decorator.component';
import { FacadeComponent } from './structural/facade/facade.component';

import {SearchFacadeService} from './services/search-facade.service';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ObserverTypescriptComponent,
    StrategyComponent,
    DecoratorComponent,
    FacadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SearchFacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
