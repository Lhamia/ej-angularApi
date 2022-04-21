import { Component, OnInit } from '@angular/core';

import { OlympusService } from 'src/app/services/olympus.service.service';

@Component({
  selector: 'app-olympus',
  templateUrl: './olympus.component.html',
  styleUrls: ['./olympus.component.scss']
})
export class OlympusComponent implements OnInit {
  dioses: any;

  constructor(private olympusService: OlympusService) { }

  ngOnInit(): void {
    this.olympusService.getGod().subscribe((res:any)=>{
      console.log(res);
      this.dioses= res;
    })
    

}
}