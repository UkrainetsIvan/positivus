import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [RadioButtonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() checked: boolean = false;

  @Output() radioChange = new EventEmitter<string>();
  Say: string;
  imageContact: string = '/img/contactUsImage.png';
  constructor() {
    this.Say = 'Say Hi';
  }
}
