import { randomInt } from 'home-on-the-range';
import { PreMadeDice } from '../../../Dicebox/preMade';

class Yahtzee {
    static createDice() {
        let diceArray = ['dicebox1', 'dicebox2', 'dicebox3', 'dicebox4', 'dicebox5'];
        for (let i = 0; i < diceArray.length; i++) {
            diceArray[i] = new PreMadeDice(`dice${i + 1}`, 6);
            diceArray[i].create();
        }
        this.rollDice(diceArray);
    }

    static rollDice() {
        document.querySelector('#yahtzee-button').addEventListener('click', () => {
            let rolls = document.querySelectorAll('.dice-area');
            for (let roll of rolls) {
                roll.textContent = randomInt(1, 6);
            }
        })
    }
}


Yahtzee.createDice();