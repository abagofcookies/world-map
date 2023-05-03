import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
    worldBank: any;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
      this.apiService.worldBank().subscribe((data)=>{
        console.log(data);
        this.worldBank = data;
      });
    }
}
