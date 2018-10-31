/**
 * @author litianhui
 * @date 2018-10-24
 * @desc 图表
 */
import Nerv from 'nervjs'
import classnames from 'classnames'
import { Breadcrumb } from '@o2team/at-ui-nerv'

import ReactEcharts from 'echarts-for-react'

import './Charts.scss'

class Charts extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  getLineOption = () => {
    return {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    }
  }

  getCylmOption = () => {
    return {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }
  }

  getCircleOption = () => ({
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })

  getRingOption = () => ({
    title: {
      // 标题组件
      text: '故障',
      left: '50px', // 标题的位置 默认是left，其余还有center、right属性
      textStyle: {
        color: '#436EEE',
        fontSize: 17
      }
    },
    tooltip: {
      // 提示框组件
      trigger: 'item', // 触发类型(饼状图片就是用这个)
      formatter: '{a} <br/>{b} : {c} ({d}%)' // 提示框浮层内容格式器
    },
    color: ['#48cda6', '#fd87fb', '#11abff', '#ffdf6f', '#968ade'], // 手动设置每个图例的颜色
    legend: {
      // 图例组件
      // right:100,  //图例组件离右边的距离
      orient: 'horizontal', // 布局  纵向布局 图例标记居文字的左边 vertical则反之
      width: 40, // 图行例组件的宽度,默认自适应
      x: 'right', // 图例显示在右边
      y: 'center', // 图例在垂直方向上面显示居中
      itemWidth: 10, // 图例标记的图形宽度
      itemHeight: 10, // 图例标记的图形高度
      data: ['正常', '一般', '提示', '较急', '特急'],
      textStyle: {
        // 图例文字的样式
        color: '#333', // 文字颜色
        fontSize: 12 // 文字大小
      }
    },
    series: [
      // 系列列表
      {
        name: '设备状态', // 系列名称
        type: 'pie', // 类型 pie表示饼图
        center: ['40%', '50%'], // 设置饼的原心坐标 不设置就会默认在中心的位置
        radius: ['50%', '70%'], // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
        itemStyle: {
          // 图形样式
          normal: {
            // normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            label: {
              // 饼图图形上的文本标签
              show: false // 平常不显示
            },
            labelLine: {
              // 标签的视觉引导线样式
              show: false // 平常不显示
            }
          },
          emphasis: {
            // normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            label: {
              // 饼图图形上的文本标签
              show: true,
              position: 'center',
              textStyle: {
                fontSize: '10',
                fontWeight: 'bold'
              }
            }
          }
        },
        data: [
          { value: 80, name: '正常' },
          { value: 10, name: '一般' },
          { value: 30, name: '提示' },
          { value: 20, name: '较急' },
          { value: 25, name: '特急' }
        ]
      }
    ]
  })

  render () {
    return (
      <div className='Charts'>
        <div className={classnames('row', 'at-row', 'crumbs')}>
          <Breadcrumb separator='/'>
            <Breadcrumb.Item>
              <i className='el-icon-lx-favor' />
              chart图表
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='chart-container'>
          <div className='plugins-tips'>
            echarts-for-react：Nerv可以使用react.js封装echart.js的图表组件。
            访问地址：
            <a
              href='https://github.com/hustcc/echarts-for-react/'
              target='_blank'
            >
              echarts-for-react
            </a>
          </div>
          <div className={classnames('row', 'at-row')}>
            <div className={classnames('col-xs-12', 'col-md-12', 'chart-box')} >
              <div className='content-title'>柱状图</div>
              <ReactEcharts
                option={this.getCylmOption()}
                style={{ height: '400px', width: '100%' }}
                opts={{ renderer: 'svg' }}
                className='react_for_echarts'
              />
            </div>
            <div className={classnames('col-xs-12', 'col-md-12', 'chart-box')}>
              <div className='content-title'>折线图</div>
              <ReactEcharts
                option={this.getLineOption()}
                style={{ height: '350px', width: '100%' }}
                className='react_for_echarts'
              />
            </div>
          </div>
          <div className={classnames('row', 'at-row')}>
            <div className={classnames('col-xs-12', 'col-md-12', 'chart-box')}>
              <div className='content-title'>饼状图</div>
              <ReactEcharts
                option={this.getCircleOption()}
                style={{ height: '350px', width: '100%' }}
                className='react_for_echarts'
              />
            </div>
            <div className={classnames('col-xs-12', 'col-md-12', 'chart-box')}>
              <div className='content-title'>环形图</div>
              <ReactEcharts
                option={this.getRingOption()}
                style={{ height: '350px', width: '100%' }}
                className='react_for_echarts'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Charts
