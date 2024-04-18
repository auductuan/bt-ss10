"use strict";
class Song {
    constructor(id, _name, _length) {
        this.id = id;
        this._name = _name;
        this._length = _length;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get length() {
        return this._length;
    }
    set length(length) {
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
