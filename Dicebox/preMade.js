import { randomInt } from 'home-on-the-range';

class PreMadeDice {
    constructor(name, sidesOnDice) {
        this.name = name;
        this.sidesOnDice = sidesOnDice;
        this.diceRoll = '???';
    }

    create() {
        let div = document.createElement('div');
        div.classList.add('text-center', 'created-dice-box');
        let boxName = document.createElement('h4');
        boxName.textContent = this.name;
        let subTitle = document.createElement('p');
        subTitle.textContent = `(${this.sidesOnDice} sided Dice)`;
        let diceArea = document.createElement('h4');
        diceArea.classList.add('dice-area');
        diceArea.textContent = this.diceRoll;
        div.append(boxName);
        div.append(subTitle);
        div.append(diceArea);
        document.querySelector('#dice-box').append(div);
    }

    rollDice(diceArea) {
        let diceRoll = randomInt(1, this.sidesOnDice);
        diceArea.textContent = diceRoll;
    }
}




export { PreMadeDice }