import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  memberOne: string = '/img/memberOne.png';
  memberTwo: string = '/img/memberTwo.png';
  memberThree: string = '/img/memberThree.png';
  memberFour: string = '/img/memberFour.png';
  memberFive: string = '/img/memberFive.png';
  memberSix: string = '/img/memberSix.png';

  nameOne: string = 'John Smith';
  nameTwo: string = 'Jane Doe';
  nameThree: string = 'Michael Brown';
  nameFour: string = 'Emily Johnson';
  nameFive: string = 'Brian Williams';
  nameSix: string = 'Sarah Kim';

  professionOne: string = 'CEO and Founder';
  professionTwo: string = 'Director of Operations';
  professionThree: string = 'Senior SEO Specialist';
  professionFour: string = 'PPC Manager';
  professionFive: string = 'Social Media Specialist';
  professionSix: string = 'Content Creator';

  aboutOne: string = '10+ years of experience in digital marketing. Expertise ' +
    'in SEO, PPC, and content strategy';
  aboutTwo: string = '7+ years of experience in project management and team leadership. ' +
    'Strong organizational and communication skills';
  aboutThree: string = '5+ years of experience in SEO and content creation. Proficient in keyword research ' +
    'and on-page optimization';
  aboutFour: string = '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis';
  aboutFive: string = '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement';
  aboutSix: string = '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries';

}
















