import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ScrolltopButtonComponent } from './scrolltop-button/scrolltop-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeSectionComponent,
    SkillsSectionComponent,
    MyWorkComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    ImprintComponent,
    MainComponent,
    PrivacyComponent,
    ScrolltopButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
