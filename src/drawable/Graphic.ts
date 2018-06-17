import { Drawable } from "./Drawable";

export class Graphic extends Drawable {
    constructor(
        private _onDraw: (ctx: CanvasRenderingContext2D) => void,
        width?: number,
        height?: number
    ) {
        super(width, height);
    }

    protected onDraw(ctx: CanvasRenderingContext2D) {
        this._onDraw.call(this, ctx);
    }
}