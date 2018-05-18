import { Injectable } from '@angular/core';

@Injectable()
export class Roles {

    constructor() { }

    getUserRoles(): string[] {
        if (localStorage.getItem('currentUserN')) {
            if (localStorage.getItem('currentUserN') == 'Antonette') {
                return ['user'];
            }
            if (localStorage.getItem('currentUserN') == 'Samantha') {
                return ['user', 'admin'];
            }
        }
        return [];
    }
}