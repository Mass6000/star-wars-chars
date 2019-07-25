import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacter'
})
export class FilterCharacterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      const filterBy = args[0];
      if (filterBy) {
        const filteredCharacters = value.filter(character =>
          character.name.toLowerCase().includes(filterBy.toLowerCase())
        );

        return filteredCharacters;
      } else {
        return value;
      }
    }
  }
}
