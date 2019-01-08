/**
 * https://github.com/margox/braft-editor
 * 简介：美观易用的React富文本编辑器，基于draft-js开发 
 */
import React, { Component } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

export default class Index extends Component {
  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null)
  }

  handleEditorChange = (editorState) => {
    // console.log(editorState.toRAW(true));
    console.log(editorState.toHTML());
    this.setState({ editorState })
  }

  submitContent = async () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML();
    // console.log(htmlContent);
  }

  preview = () => {
    if (window.previewWindow) {
      window.previewWindow.close()
    }
    window.previewWindow = window.open()
    window.previewWindow.document.write(this.buildPreviewHtml())
    window.previewWindow.document.close()

  }
  buildPreviewHtml () {
    return `
      <!Doctype html>
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            html,body{
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #f1f2f3;
            }
            .container{
              box-sizing: border-box;
              width: 1000px;
              max-width: 100%;
              min-height: 100%;
              margin: 0 auto;
              padding: 30px 20px;
              overflow: hidden;
              background-color: #fff;
              border-right: solid 1px #eee;
              border-left: solid 1px #eee;
            }
            .container img,
            .container audio,
            .container video{
              max-width: 100%;
              height: auto;
            }
            .container p{
              white-space: pre-wrap;
              min-height: 1em;
            }
            .container pre{
              padding: 15px;
              background-color: #f1f1f1;
              border-radius: 5px;
            }
            .container blockquote{
              margin: 0;
              padding: 15px;
              background-color: #f1f1f1;
              border-left: 3px solid #d1d1d1;
            }
          </style>
        </head>
        <body>
          <div class="container">${this.state.editorState.toHTML()}</div>
        </body>
      </html>
    `

  }



  render() {
    const { editorState } = this.state;
    return (
      <div className="my-component" style={{ width: '1000px' }}>
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
          extendControls={[
            {
              key: 'my-button', // 控件唯一标识，必传
              type: "button",
              text: '这是一个自定义按钮',
              className: "preview-button",
              onClick: () => {
                this.setState({
                  editorState: BraftEditor.createEditorState(null)
                })
              }
            },
            {
              key: 'preview', // 控件唯一标识，必传
              type: "button",
              text: '预览',
              className: "preview-button",
              onClick: this.preview
            }
          ]}
          controls={
            ['undo', 'redo', 'separator',
              'font-size', 'line-height', 'letter-spacing', 'separator',
              'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
              'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
              'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
              'link', 'separator', 'hr', 'separator',
              'media', 'separator',
              'clear', 'separator',
            ]
          }
        />
      </div>

    )
  }
}
