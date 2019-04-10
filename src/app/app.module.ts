import { CounterService } from './counter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputOutputParentComponent } from './input-output-parent/input-output-parent.component';
import { InputOutputChildComponent } from './input-output-child/input-output-child.component';
import { NavComponent } from './nav/nav.component';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';
import { ViewChildChildComponent } from './view-child-child/view-child-child.component';
import { ObservableParentComponent } from './observable-parent/observable-parent.component';
import { ObservableChildComponent } from './observable-child/observable-child.component';
import { InitialCounterInterface } from './interface/initial-counter.interface';
import { ChangeCounterInterface } from './interface/change.counter.interface';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputParentComponent,
    InputOutputChildComponent,
    NavComponent,
    ViewChildParentComponent,
    ViewChildChildComponent,
    ObservableParentComponent,
    ObservableChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // 透過DI container 注入相應service
    CounterService,
    // 希望各component共用一份資料, 所以使用useExisting, DI Container會以Singleton方式建立Service
    { provide: InitialCounterInterface, useExisting: CounterService},
    { provide: ChangeCounterInterface, useExisting: CounterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
