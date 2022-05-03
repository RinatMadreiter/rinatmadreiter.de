import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { MyWorkComponent } from './my-work/my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeSectionComponent,
    SkillsSectionComponent,
    MyWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
