import { NgModule } from '@angular/core';
import { AngtLibComponent } from './angt-lib.component';
import { MainComponent } from './main/main.component';
import { Main2Component } from './main2/main2.component';

@NgModule({
  imports: [
  ],
  declarations: [AngtLibComponent, MainComponent, Main2Component],
  exports: [AngtLibComponent, MainComponent, Main2Component]
})
export class AngtLibModule { }
