import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 15px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute, 
              private heroeService: HeroesService,
              private router: Router) { 
    //MI VERSION
    //activatedRoute.params.pipe(map(p => p.id)).subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroeService.getHeroePorId(id))
      ).subscribe( heroe => this.heroe = heroe );


    //MI VERSION
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //       console.log(id);
    //       this.heroeService.getHeroePorId(id)
    //         .subscribe( resp => {
    //           this.heroe = resp
    //         });
    //   });
  }

  regresar(){

  }

}
