import { Component, OnInit } from '@angular/core';
import { ShootingsService } from '../../services/shootings.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  shootings: any[]
  constructor(public sserv: ShootingsService) {

  }

  ngOnInit() {
  this.getShootings();
  }

  getShootings(){
    console.log('%cPETICIÓN CONTRA O SERVIZO', 'color:green');
    this.sserv.getShootings().subscribe(
      res => {
        console.log(res.data);
        this.shootings = res.data;
        
      },
      error => {
        console.log(error);
      });;
  }
}
