import { Pipe, PipeTransform } from '@angular/core';
import { Superheros } from './superheros';

@Pipe({
  name: 'superheropure'
})
export class SuperheropurePipe implements PipeTransform {

  transform(allheros:Superheros[]) {

    return allheros.filter(hero => hero.CanFly);
    
  }

}
