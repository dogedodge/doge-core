export class Group<T>{
    constructor(private children: T[] = []) { }

    public add(child: T): Group<T> {
        this.children.push(child);
        return this;
    }

    public remove(child: T): Group<T> {
        let index = this.children.indexOf(child);
        if (index >= 0) {
            this.children.splice(index, 1);
        } else {
            console.warn('child not found', child);
        }
        return this;
    }
    public removeAll(): Group<T> {
        this.children = [];
        return this;
    }

    public get size(): number {
        return this.children.length;
    }

    public forEach(callbackFn: (value: T, index: number, array: T[]) => void, thisArg: any) {
        this.children.slice().forEach(callbackFn, thisArg);
    }
}