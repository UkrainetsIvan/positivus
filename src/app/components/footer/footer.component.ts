import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    footerLogo: string = '/img/logoStartWhite.svg';
    linkedIn: string = '/img/linkedIn.svg';
    facebook: string = '/img/facebook.svg';
    twitter: string = '/img/twitter.svg';

    email: string = 'info@positivus.com';
    phone: string = '555-567-8901';
    addressPartI: string = '1234 Main St';
    addressPartII: string = 'Moonstone City, Stardust State 12345';
}
