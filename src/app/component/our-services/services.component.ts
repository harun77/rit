import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leader/leader.service';
import { Service } from 'src/app/shared/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getServices().subscribe(res => {
      this.services = res;
    });
  }
}
