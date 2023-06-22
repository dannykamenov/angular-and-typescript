class Box<T> {
    private _boxes = [];

    public add(element: T): void {
        this._boxes.push(element);
    }

    public remove(): void {
        this._boxes.pop();
    }

    public get count(): number {
        return this._boxes.length;
    }
}


let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
