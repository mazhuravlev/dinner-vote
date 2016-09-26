import {Item} from "../app/models/item";
import {User} from "../app/models/user";

export class Database {
    private items: Item[] = [
        <Item>{id: 1, title: 'test1', description: 'test1 description', members: []},
        <Item>{id: 2, title: 'test2', description: 'test2 description', members: []},
        <Item>{id: 3, title: 'test3', description: 'test3 description', members: []}
    ];

    private users: User[] = [
        <User>{id: 1, name: 'test', password: 'test'}
    ];

    public findUserByName(name) {
        var user = this.users.filter(u => u.name === name);
        if (1 === user.length) {
            return user.pop();
        } else {
            return null;
        }
    }

    public findUserById(id: number) {
        var user = this.users.filter(u => u.id === id);
        if (1 === user.length) {
            return user.pop();
        } else {
            return null;
        }
    }

    public getItems(): Item[] {
        return this.items;
    }
}