import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './behavioural/observable/observable.component';
import { ObserverTypescriptComponent } from './behavioural/observer-typescript/observer-typescript.component';
import { StrategyComponent } from './behavioural/strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ObserverTypescriptComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
