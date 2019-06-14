import { PreMadeDice2 } from '../../../Dicebox/preMade2';

class DungeonsAndDragons {
    static createDice() {
        let dicebox1 = new PreMadeDice2('D4 - Tetrahedron', 4);
        let dicebox2 = new PreMadeDice2('D6 - The Cube', 6);
        let dicebox3 = new PreMadeDice2('D8 - Octahedron', 8);
        let dicebox4 = new PreMadeDice2('D10 - Tetrahedron', 10);
        let dicebox5 = new PreMadeDice2('Percentile Rolls', 10);
        let dicebox6 = new PreMadeDice2('D12 - Dodecahedron', 12);
        let dicebox7 = new PreMadeDice2('D20 - Icosahedron', 20);

        let diceArray = [dicebox1, dicebox2, dicebox3, dicebox4, dicebox5, dicebox6, dicebox7];
        for (let dicebox of diceArray) {
            dicebox.create();
        }
    }
}


DungeonsAndDragons.createDice();