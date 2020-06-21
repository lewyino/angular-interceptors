export class PersonModel {
    public id: number;
    public name: string;
    public lastName: string;

    constructor(opts?: Partial<PersonModel>) {
        opts = opts || {};
        this.id = opts.id ?? 0;
        this.name = opts.name || 'name';
        this.lastName = opts.lastName || 'lastname';
    }
}
