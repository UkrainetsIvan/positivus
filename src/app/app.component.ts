import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/header/header.component';
import { ServicesComponent } from "../app/components/services/services.component";
import { ProposalComponent } from './components/proposal/proposal.component';
import { CaseComponent } from "./components/case/case.component";
import { ProcessComponent } from './components/process/process.component';
import {HeroComponent} from "./components/hero/hero.component";
import {TeamComponent} from "./components/team/team.component";
import {TestimonailsComponent} from "./components/testimonails/testimonails.component";
import {ContactusComponent} from "./components/contactus/contactus.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ServicesComponent, ProposalComponent, CaseComponent, ProcessComponent, HeroComponent, TeamComponent, TestimonailsComponent, ContactusComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'positivus';
  selectedValue: string = '';

  onRadioChange(value: string) {
    this.selectedValue = value;
  }
}
