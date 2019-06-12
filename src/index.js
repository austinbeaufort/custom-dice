import { Dicebox } from '../Dicebox/dicebox';


const app = {
    createDiceBoxButton: document.querySelector('#dice-init-button'),
    form: document.querySelector('#dice-create-form')
}

class Main {
    static diceBoxDisplayHandler() {
        let {createDiceBoxButton, form} = app;
        createDiceBoxButton.addEventListener('click', () => {
            form.classList.remove('d-none');
            createDiceBoxButton.classList.add('d-none');
        })
    }

    static formSubmitHandler() {
        let {createDiceBoxButton, form} = app;
        form.addEventListener('submit', e => {
            e.preventDefault();
            let boxName = document.querySelector('#boxName').value;
            let sidesOnDice = document.querySelector('#sidesOnDice').value;
            let dicebox = new Dicebox(boxName, Number(sidesOnDice));
            if(Number.isInteger(dicebox.sidesOnDice)) {
                dicebox.create();
                form.classList.add('d-none');
                createDiceBoxButton.classList.remove('d-none');
            } else {
                alert('please enter a valid number of sides for your dice');
            }
        })
    }
}




Main.diceBoxDisplayHandler();
Main.formSubmitHandler();