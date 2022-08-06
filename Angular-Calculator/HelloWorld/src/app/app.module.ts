import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CounterComponent } from './components/counter/counter.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from './reducers/counter.reducer';
import { calculatorReducer } from './reducers/calculator.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    StoreModule.forRoot({counter: counterReducer,cal: calculatorReducer}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
