import {Component} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-case',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss'
})
export class CaseComponent {
    arrow: string = '/img/arrow.svg';
}
