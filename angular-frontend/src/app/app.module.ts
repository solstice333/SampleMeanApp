import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { KittiesService } from './kitties.service';

import { AppComponent } from './app.component';
import { KittiesComponent } from './kitties/kitties.component';

const ROUTES: Routes = [
   {
      path: '',
      redirectTo: 'kitties',
      pathMatch: 'full'
   },
   {
      path: 'kitties',
      component: KittiesComponent
   }
];

@NgModule({
  declarations: [
    AppComponent,
    KittiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [KittiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
