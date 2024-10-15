import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  arrow: string = '/img/arrow.svg';
  arrowBlack: string = '/img/arrowBlack.svg';
  search: string = '/img/serviceSearch.png';
  pay: string = '/img/servicePay.png';
  social: string = '/img/serviceSocial.png';
  email: string = '/img/serviceEmail.png';
  content: string = '/img/serviceContent.png';
  analytics: string = '/img/serviceAnalytics.png';
}
