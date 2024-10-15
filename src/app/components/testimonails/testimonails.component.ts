import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-testimonails',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './testimonails.component.html',
  styleUrl: './testimonails.component.scss'
})
export class TestimonailsComponent {
  slides = [
    {
      image: '/img/Bubble.svg',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: 'John Smith',
      proffession: 'Marketing Director at XYZ Corp'
    },
    {
      image: '/img/Bubble.svg',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: 'John Smith',
      proffession: 'Marketing Director at XYZ Corp'
    },
    {
      image: '/img/Bubble.svg',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: 'John Smith',
      proffession: 'Marketing Director at XYZ Corp'
    },
    {
      image: '/img/Bubble.svg',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: 'John Smith',
      proffession: 'Marketing Director at XYZ Corp'
    },
    {
      image: '/img/Bubble.svg',
      description: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: 'John Smith',
      proffession: 'Marketing Director at XYZ Corp'
    }
  ];

  currentSlideIndex: number = 1;
  arrowLeft: string = '/img/arrowLeft.svg';
  arrowRight: string = '/img/arrowRight.svg';
  greenStar: string = '/img/greenStar.svg';
  whiteStar: string = '/img/whiteStar.svg';
  stars: number[] = new Array(5);
  private two: any;

  get sliderTransform(): string {
    return `translateX(-${this.currentSlideIndex * 50}%)`;
  }

  isActive(index: number): boolean {
    return this.currentSlideIndex === index;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
