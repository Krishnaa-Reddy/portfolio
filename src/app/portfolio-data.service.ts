import { Injectable } from '@angular/core';
import { Skill } from './interface/skill';
import { Testimonial } from './interface/testimonial';


@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }

  skills: Skill[] = [
    { name: 'HTML', bgColor: 'hsl(177, 39%, 72%)' , icon: 'logo-html5'},
    { name: 'CSS', bgColor: 'hsl(41, 99%, 64%)', icon: 'logo-css3'},
    { name: 'ReactJS', bgColor: 'hsl(19, 97%, 85%)', icon: 'logo-react'},
    { name: 'AngularJS', bgColor: 'hsl(76, 39%, 72%)', icon: 'logo-angular' },
    { name: 'NodeJS', bgColor: 'hsl(60, 95%, 85%)', icon: 'logo-nodejs' },
    { name: 'IOS Dev', bgColor: 'hsl(37, 95%, 85%)', icon: 'logo-apple'}
  ]

  testimonials: Testimonial[] = [
    { id:1, name: 'Jennifer Lutheran', jobTitle: 'CEO at PXdraft'},
    { id:2, name: 'Jenny Lutheran', jobTitle: 'CEO at X'},
    { id:3, name: 'Lucy Lutheran', jobTitle: 'CEO at Y'},
    { id:4, name: 'Bendetta Lutheran', jobTitle: 'CEO at Z'},
  ]

  getSkills(): Skill[] {
    return this.skills;
  }
  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }
}
