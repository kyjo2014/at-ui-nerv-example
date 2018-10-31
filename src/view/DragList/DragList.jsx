/**
 * @author litianhui
 * @date 2018-10-24
 * @desc 拖拽列表
 */
import Nerv from 'nervjs'

import {Breadcrumb} from '@o2team/at-ui-nerv'
// import { DropTarget, DragDropContext, ConnectDropTarget } from 'react-dnd'

import './DragList.scss'

class DragList extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='DragList'>
        <div className='crumbs'>
          <Breadcrumb separator='/'>
            <Breadcrumb.Item><i className='el-icon-rank' /> 拖拽排序</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='drag-container'>
          <div className='plugins-tips'>
                react-dnd：基于 React.js 的拖拽组件。
                访问地址：<a href='https://github.com/react-dnd/react-dnd' target='_blank'>react-dnd</a>
          </div>
          <div className='drag-box'>
            <div className='drag-box__item'>
              <div className='item-title'>todo</div>

            </div>
            <div className='drag-box__item'>
              <div className='item-title'>doing</div>

            </div>
            <div className='drag-box__item'>
              <div className='item-title'>done</div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = DragList
