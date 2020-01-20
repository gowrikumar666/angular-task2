import { Component, OnInit } from '@angular/core';
import { Superheros } from '../superheros';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  heros:Superheros[] = [];
  canFly: true;
  item: true;

  constructor() { }

  ngOnInit() {
  }
  addsuperheros(name: string){

    var hero = new Superheros();
    hero.Name = name;
    hero.CanFly = this.canFly;

    //this.heros.push(hero);

    if(this.item){
      this.heros.push(hero)
    }else{
      this.heros= this.heros.concat(hero);
    }

  }
  reset(){
    this.heros= [
     {Name: "superman", CanFly:true},
     {Name: "spiderman",CanFly:true},
     {Name: "ironman",CanFly:true},
  ]
  }

}
