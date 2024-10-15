import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
    heroimage: string = '/img/heroImage.png';

    amazon: string = '/img/amazon.svg';
    dribbble: string = '/img/dribbble.svg';
    hubSpot: string = '/img/hubSpot.svg';
    notion: string = '/img/notion.svg';
    netflix: string = '/img/netflix.svg';
    zoom: string = '/img/zoom.svg';
}
