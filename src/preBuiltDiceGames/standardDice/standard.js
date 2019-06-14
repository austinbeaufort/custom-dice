import { randomInt } from 'home-on-the-range';
import { PreMadeDice2 } from '../../../Dicebox/preMade2';

class Standard {
    static createDice() {
        let dicebox1 = new PreMadeDice2('Dice 1', 6);
        let dicebox2 = new PreMadeDice2('Dice 2', 6);

        let diceArray = [dicebox1, dicebox2];
        for (let dicebox of diceArray) {
            dicebox.create();
        }
        this.rollDice();
    }

    static rollDice() {
        document.querySelector('#standard-button').addEventListener('click', () => {
            let rolls = document.querySelectorAll('.dice-area');
            for (let roll of rolls) {
                roll.textContent = randomInt(1, 6);
            }
        })
    }
}


Standard.createDice();