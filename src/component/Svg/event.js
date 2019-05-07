import React, { Component } from 'react'

export default class SvgEvent extends Component {

    create_a = (evt) => {
        console.log(evt);
        // debugger;
        // var SVGDoc = evt.target();
        var txt = document.getElementById("txt");
        var link = document.createElement("a");
        var text_node = document.createTextNode("LINK");

        link.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            "http://www.w3schools.com");
        link.appendChild(text_node);
        txt.appendChild(link);
    }


    render() {
        return (
            <div>
                <svg width="100%" height="100%" style={{ position: "absolute" }} version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect id='txt' x="100" y="0" width="250" height="250" style={{ fill: 'blue' }} onClick={this.create_a}>
                    </rect>
                </svg>

            </div >
        )
    }
}


