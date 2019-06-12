import { randomInt } from 'home-on-the-range';

class Dicebox {
    constructor(name, sidesOnDice) {
        this.name = name;
        this.sidesOnDice = sidesOnDice;
    }

    create() {
        let div = document.createElement('div');
        div.classList.add('text-center', 'created-dice-box');
        let deleteButton = document.createElement('h3');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button', 'text-right', 'mt-2', 'mr-2');
        let boxName = document.createElement('h4');
        boxName.textContent = this.name;
        let subTitle = document.createElement('p');
        subTitle.textContent = `(${this.sidesOnDice} sided Dice)`;
        let diceArea = document.createElement('h4');
        diceArea.textContent = '???';
        let rollButton = document.createElement('button');
        rollButton.classList.add('btn', 'btn-primary');
        rollButton.textContent = 'Roll the Dice';
        rollButton.id = 'roll-button';
        div.append(deleteButton);
        div.append(boxName);
        div.append(subTitle);
        div.append(diceArea);
        div.append(rollButton);
        document.querySelector('#dice-box').append(div);
        rollButton.addEventListener('click', () => {
            this.rollDice(diceArea);
        });
        UI.createDeleteListener(deleteButton, div);
        UI.clearForm();
    }

    rollDice(diceArea) {
        let diceRoll = randomInt(1, this.sidesOnDice);
        diceArea.textContent = diceRoll;
    }
}


class UI {
    static clearForm() {
        boxName.value = '';
        sidesOnDice.value = '';
    }

    static createDeleteListener(deleteButton, div) {
        deleteButton.addEventListener('click', () => {
            div.remove();
        });
    }
    
}


export { Dicebox }