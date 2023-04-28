import { Component } from '@angular/core';

@Component({
  selector: 'app-display-svg',
  templateUrl: '../images/world.svg',
  styleUrls: ['./display-svg.component.css']
})
export class DisplaySvgComponent {
  getCountryValue(params: any){
    console.log(params.srcElement.classList.value)
    console.log(params.srcElement.id)
  }
}
