/**
 * @author litianhui
 * @date 2018-10-19
 * @desc 图标页面
 */
import Nerv from 'nervjs'

import './Icon.scss'

import {Breadcrumb} from '@o2team/at-ui-nerv'

class Icon extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='Icon'>
        <div>
        <div class="crumbs">
            <Breadcrumb separator="/">
              <Breadcrumb.Item><i className={classNames"el-icon-lx-emoji"}></i>自定义图标</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div class="container">
            <h2>使用方法</h2>
            <p style="line-height: 50px;">
                直接通过设置类名为 el-icon-lx-iconName 来使用即可。例如：（共{{iconList.length}}个图标）
            </p>
            <p class="example-p">
                <i class="el-icon-lx-redpacket_fill" style="font-size: 30px;color: #ff5900"></i>
                <span>&lt;i class=&quot;el-icon-lx-redpacket_fill&quot;&gt;&lt;/i&gt;</span>
            </p>
            <p class="example-p">
                <i class="el-icon-lx-weibo" style="font-size: 30px;color:#fd5656"></i>
                <span>&lt;i class=&quot;el-icon-lx-weibo&quot;&gt;&lt;/i&gt;</span>
            </p>
            <p class="example-p">
                <i class="el-icon-lx-emojifill" style="font-size: 30px;color: #ffc300"></i>
                <span>&lt;i class=&quot;el-icon-lx-emojifill&quot;&gt;&lt;/i&gt;</span>
            </p>
            <br>
            <h2>图标</h2>
            <div class="search-box">
                <el-input class="search" size="large" v-model="keyword" clearable placeholder="请输入图标名称"></el-input>
            </div>
            <ul>
                <li class="icon-li" v-for="(item,index) in list" key="index">
                    <div class="icon-li-content">
                        <i :class="`el-icon-lx-${item}`"></i>
                        <span>{{item}}</span>
                    </div>
                </li>
            </ul>
        </div>

    </div>
      </div>
    )
  }
}

module.exports = Icon
