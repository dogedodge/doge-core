export class Group<T>{
    constructor(private children: T[] = []) { }
    public add(child: T): Group<T> {
        this.children.push(child);
        return this;
    }
}