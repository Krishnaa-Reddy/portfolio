import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/constants/constant';
import { PortfolioDataService } from '../portfolio-data.service';
import { Testimonial } from '../interface/testimonial';
import { Skill } from '../interface/skill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  clients = [1, 2, 3, 4, 5];
  clientImgs = [];
  skills:Skill[] = [];
  testimonials:Testimonial[] = []; 

  constructor(private service: PortfolioDataService){};

  ngOnInit(): void {
    this.setClientImgs();
    this.setTestimonials();
    this.skills = this.service.getSkills();
  }
  
  setClientImgs(this: any) {
    this.clientImgs = this.clients.map((clientId: number) => CONSTANTS.CLIENT_IMG_PATH + clientId + ".svg");
  }

  setTestimonials(this: any) {
    this.testimonials = this.service.getTestimonials().map( (testimonial : Testimonial) =>  ({ ...testimonial, description: CONSTANTS.JOB_DESCRIPTION, profileImg: CONSTANTS.TESTIMONIAL_IMG_PATH + testimonial.id + '.jpg'}) )
  }


}


