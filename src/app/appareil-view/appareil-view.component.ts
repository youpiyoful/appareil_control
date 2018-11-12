import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  @Input() id: number;

  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];

  // status1 = 'éteint';
  // status2 = 'allumé';
  constructor(private AppareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(){
    this.appareils = this.AppareilService.appareils;
  }

  onLightUp(){
    this.AppareilService.switchOnAll();
  }

  onSwitchOff() {
    if(confirm('Êtes vous sûr de vouloir tout éteindre ?')){
      this.AppareilService.switchOffAll();
    }else{
      return null;
    }
  }
}
