import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OlympusService } from 'src/app/services/olympus.service.service';


@Component({
  selector: 'app-olympus-details-page',
  templateUrl: './olympus-details-page.component.html',
  styleUrls: ['./olympus-details-page.component.scss']
})
export class OlympusDetailsPageComponent implements OnInit {
  dios : any;
  

  constructor(private activateRoute: ActivatedRoute, private olympusService: OlympusService) { }

  ngOnInit(): void {
  this.activateRoute.paramMap.subscribe(params =>{
    this.olympusService.getDios(params.get("dios")).subscribe( dios =>{
      this.dios.id = dios
    })
  })
  }

}
