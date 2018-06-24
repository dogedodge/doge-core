import { Stage } from "../drawable";

export function run(canvas: string | HTMLCanvasElement) {
    if (typeof canvas === 'string') {
        canvas = document.querySelector(canvas) as HTMLCanvasElement;
    }
    const stage = new Stage(canvas, canvas.width, canvas.height);
    return stage;
}