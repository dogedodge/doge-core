export class Drawable {
    parent: Drawable;
    x: number = 0;
    y: number = 0;
    // stageX: number = 0;
    // stageY: number = 0;
    rotation: number = 0;
    anchorX: number = 0;
    anchorY: number = 0;
    scaleX: number = 1;
    scaleY: number = 1;

    constructor(
        /** width without scale */
        protected _width?: number,
        /** height without scale */
        protected _height?: number
    ) {

    }

    draw(ctx: CanvasRenderingContext2D) {
        // if (!this.parent) {
        //     // only stage has no parent
        //     this.stageX = 0;
        //     this.stageY = 0;
        // } else {
        //     this.stageX = this.parent.stageX + this.x;
        //     this.stageY = this.parent.stageY + this.y;
        // }
        ctx.save();
        // todo: use transform instead
        ctx.translate(this.x, this.y);
        if (this.rotation % 360 !== 0) {
            ctx.rotate(this.rotation * Math.PI / 180);
        }
        ctx.translate(-this.anchorX * this.scaleX, -this.anchorY * this.scaleY);
        ctx.scale(this.scaleX, this.scaleY);

        this.onDraw(ctx);

        ctx.restore();
    }

    /**
     * if only scaleX provided, x/y all scale as scaleX
     * @param scaleX 
     * @param scaleY 
     */
    scale(scaleX: number, scaleY?: number) {

        this.scaleX = scaleX;

        if (scaleY === void 0) {
            this.scaleY = this.scaleX;
        } else {
            this.scaleY = scaleY
        }
    }

    set width(w: number) {
        this._width = w;
    }
    get width(): number {
        if (this._width === void 0) {
            return 0;
        }
        return this._width * this.scaleX;
    }

    set height(h: number) {
        this._height = h;
    }
    get height(): number {
        if (this._height === void 0) {
            return 0;
        }
        return this._height * this.scaleY;
    }

    /**
     * callback to override
     */
    protected onDraw(ctx: CanvasRenderingContext2D) {

    }
}