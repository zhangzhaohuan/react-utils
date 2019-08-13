import React, { Component } from 'react'
import 'svg.js';
import 'svg.draw.js';
// 引入 select 扩展 (http://svgjs.com/svg.select.js/) ** 官网文档未更新，请参照 installed .md 文档
import 'svg.select.js';
import 'svg.select.js/dist/svg.select.css';
// 引入 resize 扩展 (http://svgjs.com/svg.resize.js/)
// 使用 local 版本，svgjs 版本无法设置最小高宽
import 'utils/svg-resize/svg.resize.js';

// import 'utils/svg-draggable/svg.draggable.js';
import 'svg.draggable.js'

export default class SvgResizeJs extends Component {
    componentDidMount() {


        // var drawing = SVG('myDrawing').size(500, 500);
        // var rect = drawing.rect(200, 200).move(200, 200);
        // rect.selectize();
        // rect.draggable();
        // rect.resize('stop');
        // rect.on('resizing',()=>{
        //     // console.log(this);
        //     console.log('resizing');
        //     console.log(this.fire);
        // })




        // var rect = drawing.rect(100, 100)

        // rect.draggable({
        //     minX: 0,
        //     minY: 0,
        //     maxX: 500,
        //     maxY: 500,
        // })



        // var drawing = SVG('myDrawing').size(500, 500);
        // var rect = drawing.rect(100, 100);

        // drawing.on('mousedown', function (event) {
        //     console.log('dovw')
        //     console.log(event);
        //     rect.draw(event);
        // });
        // drawing.on('mouseup', function (event) {
        //     console.log('up')
        //     rect.draw('stop', event);
        //     rect.draggable({
        //         minX: 0,
        //         minY: 0,
        //         maxX: 500,
        //         maxY: 500,
        //     })
        // });



        // var drawing = new SVG('myDrawing').size(500, 500);

        // var rect = drawing.rect(100, 100).draw();
        // rect.on('drawstart', (event) => {
        //     console.log('drawstart');
        // });
        // // Draws the point while moving the mouse
        // rect.on('drawupdate', (event) => {
        //     console.log('drawupdate');
        // });

        // rect.on('drawstop', (event) => {
        //     console.log('drawstop');
        // });


        // rect.on('drawpoint', (event) => {
        //     console.log('drawpoint');
        // });

        // rect.on('drawcancel', (event) => {
        //     console.log('drawcancel');
        // });

        // rect.on('drawdone', (event) => {
        //     console.log('drawdone');
        // });






        var drawing = SVG('myDrawing').size(500, 500);
        var polygon = drawing.polygon().attr('pointer-events', 'visible');
        polygon.draw();
        var count = 0;

        polygon.on('drawstart', (event) => {
            console.log('drawstart');
        });

        polygon.on('drawupdate', (event) => {
            console.log('drawupdate');
        });

        polygon.on('drawpoint', (event) => {
            console.log('drawpoint');
            count += 1;
            if(count>5){
                polygon.draw('stop');
            }
        });

        polygon.on('drawdone', (event) => {
            console.log('drawdone');
        });


        polygon.on('drawcancel', (event) => {
            console.log('drawcancel');
        });





        // var drawing = SVG('myDrawing').size(500, 500);
        // var grounp = drawing.group();
        // grounp.rect(100, 100);
        // grounp.rect(10, 10);
        // var rect1 = grounp.children()[0];
        // rect1.fill({ color: 'rgb(0, 110, 255)', opacity: 0.6 })
        // console.log(rect1.node);
        // grounp.selectize({ deepSelect: true });
        // rect1.on('resizing',()=>{
        //     // console.log(this);
        //     console.log('resizing');
        // })
        // grounp.children()[0].resize();
        // grounp.draggable();


        // var drawing = SVG('myDrawing').size(500, 500);

        // drawing.on('mousedown',(event)=>{
        //     console.log(event);
        //     console.log(event.target);

        // })




    }
    render() {
        return (
            <div id="myDrawing"></div>
        )
    }
}
