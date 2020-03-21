import { Injectable } from '@angular/core';
@Injectable()
export class DataService {
    private userID;
    constructor() { }
    setID(value) {
        this.userID = value;
    }
    getID() {
        return this.userID;
    }
}