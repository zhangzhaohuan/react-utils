import React, { Component } from 'react'
const E = require('wangeditor');
window.wangEditor = E;

export default class componentName extends Component {


    componentDidMount() {
        const self =this;
        window.editor = this.editor = new E('richEditorDemo');
        debugger;
        this.editor.onchange = function () {

            console.log(self.editor.$txt.html());

        }
        this.editor.config.onchangeTimeout = 300;

        this.editor.config.onblur = function (html) {
            console.log(html)

        }
        this.editor.config.zIndex = 100;

        //错误提示
        this.editor.config.customAlert = function (info) {
            message.error(info); return;
        }

        this.editor.create();

        this.props.disabled == true ? this.editor.$textElem.attr('contenteditable', false) : '';
    }
    render() {
        return (
            <div>
                <div id='richEditorDemo'>



                </div>
            </div>
        )
    }
}
