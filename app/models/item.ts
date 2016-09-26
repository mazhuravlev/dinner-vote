import {User} from "./user";
export class Item {
    public id: number;
    public title: string;
    public description: string;
    public members: User[] = [];
    public isMember: boolean;

    constructor(title: string, description?: string) {
        this.title = title;
        this.description = description;
    }
}