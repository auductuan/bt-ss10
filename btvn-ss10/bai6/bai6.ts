class Song {
    constructor(public readonly id: number, private _name: string, private _length: number) {}

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get length(): number {
        return this._length;
    }

    set length(length: number) {
        this._length = length;
    }
}

const song = new Song(1, "Hay Trao Cho Anh", 100);

console.log("Name:", song.name);
song.name = "Chung ta cua hien tai";
console.log("Updated Name:", song.name);

console.log("Length:", song.length);
song.length = 120;
console.log("Updated Length:", song.length);
