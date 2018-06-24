import { Drawable } from "./Drawable";
import { stomach } from "../Stomach";

export class DrawableImage extends Drawable {
    /** @type {PromiseLike<HTMLImageElement>} */
    private promise: Promise<HTMLImageElement>;
    /** @type {HTMLImageElement} */
    private image: HTMLImageElement;
    private imgScaleX: number = 1;
    private imgScaleY: number = 1;

    constructor(
        private src: string,
        width?: number,
        height?: number
    ) {
        super(width, height);
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.image !== void 0) {
            super.draw(ctx);
            return;
        }

        if (this.promise === void 0) {
            this.promise = stomach.feed(this.src);
            this.promise.then((img) => {
                this.image = img;
                this.updateSize();
                super.draw(ctx);
            });
        }
    }

    private updateSize() {
        if (this._width === void 0) {
            this._width = this.image.width;
        }
        if (this._height === void 0) {
            this._height = this.image.height;
        }

        // if already has size before img loaded, should scale to fit
        this.imgScaleX = this._width / this.image.width;
        this.imgScaleY = this._height / this.image.height;
    }

    protected onDraw(ctx: CanvasRenderingContext2D) {
        super.onDraw(ctx);
        const shouldScale = (this.imgScaleX !== 1 || this.imgScaleY !== 1);
        if (shouldScale) {
            ctx.save();
            ctx.scale(this.imgScaleX, this.imgScaleY);
        }
        ctx.drawImage(this.image, 0, 0);
        if (shouldScale) {
            ctx.restore();
        }
    }
}