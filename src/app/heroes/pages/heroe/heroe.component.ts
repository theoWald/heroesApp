import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 
    //activatedRoute.params.pipe(map(p => p.id)).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id}) => console.log(id));
  }

}
