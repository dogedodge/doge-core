import { Drawable } from "./Drawable";

export class DrawableSet extends Drawable {
    protected childSet: Set<Drawable>;

    constructor(
        width?: number,
        height?: number
    ) {
        super(width, height);
        this.childSet = new Set();
    }

    add(child: Drawable) {
        child.parent = this;
        this.childSet.add(child);
    }

    clear() {
        this.childSet.forEach(child => child.parent = void 0);
        this.childSet.clear();
    }

    delete(child: Drawable) {
        child.parent = void 0;
        this.childSet.delete(child);
    }

    protected onDraw(ctx: CanvasRenderingContext2D) {
        super.onDraw(ctx);
        this.childSet.forEach(child => child.draw(ctx))
    }
}