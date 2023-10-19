import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ghost Spider';
  public age: number = 21;

  toCapitalize( value: string ): string {
    const myValue = value [0].toUpperCase() + value.substring(1);
    return myValue;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    this.name = "Spidergwen";
  }

  changeAge(): void {
    this.age = 18;
  }

  resetForm(): void {
    this.name = 'Ghost Spider';
    this.age = 21;

    // document.querySelectorAll('h1')!.forEach( elemento => {
    //   elemento.innerHTML = '<h1>Desde Angular</h1>';
    // });
    // Esto no funciona porque está fuera del ciclo de detección de Angular, no lo puede detectar porque lo ha tocado JS y no Angular.
  }
}
