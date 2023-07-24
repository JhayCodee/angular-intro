import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // evetn emitter to send data to parent component
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { name: '', power: 0, img: ''} as Character;

  emitCharacter() {

    if (!this.character.name || this.character.name.trim().length === 0
        || !this.character.power || this.character.power <= 0
      // || !this.character.image || this.character.image.trim().length === 0
    ) return;

    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0, img: ''};
  }


}
