import { Component, OnInit } from '@angular/core';
import { KittiesService } from '../kitties.service';

@Component({
  selector: 'app-kitties',
  templateUrl: './kitties.component.html',
  styleUrls: ['./kitties.component.css']
})
export class KittiesComponent implements OnInit {
  kitties: object[];

  constructor(private kittiesService: KittiesService) { }

  ngOnInit() {
    this.kittiesService.getAllKitties()
      .subscribe((kitties: object[]) => {
        this.kitties = kitties
      });
  }
}
