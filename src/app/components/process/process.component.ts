import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent {

  one: string = '01';
  two: string = '02';
  three: string = '03';
  four: string = '04';
  five: string = '05';
  six: string = '06';

  titleOne: string = 'Consultation';
  titleTwo: string = 'Research and Strategy Development';
  titleThree: string = 'Implementation';
  titleFour: string = 'Monitoring and Optimization';
  titleFive: string = 'Reporting and Communication';
  titleSix: string = 'Continual Improvement';

  descriptionOne: string = 'During the initial consultation, we will discuss your ' +
    'business goals and objectives, target audience, and current marketing efforts. ' +
    'This will allow us to understand your needs and tailor our services to best fit ' +
    'your requirements.';
  descriptionTwo: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'A accusantium amet, animi dignissimos dolores eaque facere illo illum, neque nisi ' +
    'non odio optio quidem rem repellendus sit, totam veritatis. Architecto!';

  isOpen: boolean[] = [false, false, false, false, false, false]
  toggleOpen(index: number):void {
    this.isOpen[index] = !this.isOpen[index]
  }
}
