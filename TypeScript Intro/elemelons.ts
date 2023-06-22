abstract class Melon {
    public weight: number;
    public melonSort: string;
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super();
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`;
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super();
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`;
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super();
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`;
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super();
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`;
    }
}

class Melolemonmelon extends Watermelon {
    private elements: Array<string>;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elements = ["Water", "Fire", "Earth", "Air"];
    }

    public morph(): void {
        let currentElement = this.elements.shift();
        if (currentElement) {
            this.elements.push(currentElement);
        }
    }

    public toString(): string {
        return `Element: ${this.elements[0]}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`;
    }
}

//let test : Melon = new Melon(100, "Test");
//Throws error
let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100