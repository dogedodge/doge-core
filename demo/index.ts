import * as doge from '../src';

const stage = doge.run('#stage');
console.log('stage', stage);

const graphic = new doge.Graphic((ctx) => {
    ctx.beginPath();
    ctx.rect(0, 0, stage.width, stage.height);
    ctx.stroke();
});
stage.add(graphic);

const img = new doge.DrawableImage('./assets/doge.png');
stage.add(img);

stage.draw();