import { DrawableSet } from "./DrawableSet";

export class Stage extends DrawableSet {
    private ctx: CanvasRenderingContext2D;
    constructor(
        private canvas: HTMLCanvasElement,
        width?: number,
        height?: number
    ) {
        super(width, height);
        this.ctx = canvas.getContext('2d');
    }

    draw() {
        super.draw(this.ctx);
    }

    clearFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}