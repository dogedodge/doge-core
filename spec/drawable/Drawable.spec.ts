import { Drawable } from '../../src/drawable'
import { integer } from '../_tools/integer';
describe('Drawable', () => {
    let ctx: CanvasRenderingContext2D;
    let drawable: Drawable;
    let _width: number;
    let _height: number;
    let _x: number;
    let _y: number;
    beforeEach(() => {
        ctx = jasmine.createSpyObj<CanvasRenderingContext2D>([
            'save', 'translate', 'rotate',
            'scale', 'restore'
        ]);
        _width = integer(0, 1000);
        _height = integer(0, 1000);
        drawable = new Drawable(_width, _height);
        drawable.x = _x;
        drawable.y = _y;
    });

    it('can calculate coordinate on stage', () => {
        drawable.draw(ctx);
        expect(drawable.parent).not.toBeDefined();
        expect(drawable.stageX).toEqual(0);
        expect(drawable.stageY).toEqual(0);
        let mockParent = new Drawable();
        mockParent.stageX = integer(0, 1000);
        mockParent.stageY = integer(0, 1000);
        drawable.parent = mockParent;
        drawable.draw(ctx);
        expect(drawable.stageX).toEqual(mockParent.stageX + _x);
        expect(drawable.stageY).toEqual(mockParent.stageY + _y);
    });

    it('can scale', () => {
        let sx = integer(0, 100);
        let sy = integer(0, 100);
        drawable.scale(sx, sy);
        expect(drawable.width).toEqual(_width * sx);
        expect(drawable.height).toEqual(_height * sy);
        drawable.scale(sx);
        expect(drawable.height).toEqual(_height * sx);
        let newWidth = integer(0, 1000, [_width]);
        drawable.width = newWidth;
        expect(drawable.width).toEqual(newWidth * sx);
    });
});