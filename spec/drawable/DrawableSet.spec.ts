import { DrawableSet } from "../../src/drawable/DrawableSet";
import { Drawable } from "../../src";

describe('DrawableSet', () => {
    let ctx: CanvasRenderingContext2D;
    let dSet: DrawableSet;
    let child: Drawable;
    beforeEach(() => {
        ctx = jasmine.createSpyObj<CanvasRenderingContext2D>([
            'save', 'translate', 'rotate',
            'scale', 'restore'
        ]);
        dSet = new DrawableSet();
        child = new Drawable();
        spyOn(child, "draw");
    })
    it('can add child', () => {
        expect(child.parent).not.toBeDefined();
        dSet.add(child);
        expect(child.parent).toBe(dSet);
    });

    it('can draw child', () => {
        dSet.add(child);
        dSet.draw(ctx);
        expect(child.draw).toHaveBeenCalledTimes(1);
        expect(child.draw).toHaveBeenCalledWith(ctx);
    });
});