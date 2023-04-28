import { Component } from '@angular/core';

@Component({
  selector: 'app-display-svg',
  templateUrl: '../images/world.svg',
  styleUrls: ['./display-svg.component.css']
})
export class DisplaySvgComponent {
helloWorld(params: any){
  console.log("hello", params)
}
}
