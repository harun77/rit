import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader/leader.service';
import { Service } from 'src/app/shared/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    '/assets/images/home/1.jpg',
    '/assets/images/home/2.jpg',
    '/assets/images/home/3.jpg',
    '/assets/images/home/4.png',
    '/assets/images/home/5.jpg',
  ];

  slideConfig = { speed: 1000, "slidesToShow": 1, "slidesToScroll": 1, autoplay: true };

  services: Service[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getServices().subscribe(res => {
      this.services = res;
    });
  }

}
