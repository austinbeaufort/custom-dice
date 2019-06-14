import { randomInt, randomChoice } from 'home-on-the-range';

class PreMadeDice2 {
    constructor(name, sidesOnDice) {
        this.name = name;
        this.sidesOnDice = sidesOnDice;
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
        diceArea.textContent = '???';
        let rollButton = document.createElement('button');
        rollButton.classList.add('btn', 'btn-primary');
        rollButton.textContent = 'Roll the Dice';
        rollButton.id = 'roll-button';
        div.append(boxName);
        div.append(subTitle);
        div.append(diceArea);
        div.append(rollButton);
        document.querySelector('#dice-box').append(div);
        rollButton.addEventListener('click', () => {
            this.rollDice(diceArea);
        });
    }

    rollDice(diceArea) {
        if (diceArea.parentElement.firstChild.textContent === 'Percentile Rolls') {
            let diceRoll = randomChoice([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
            diceArea.textContent = diceRoll;
        } else {
            let diceRoll = randomInt(1, this.sidesOnDice);
            diceArea.textContent = diceRoll;
        }
    }

}

export { PreMadeDice2 }