/**
 * @author litianhui
 * @date 2018-10-19
 * @desc 基本表单
 */
import Nerv from 'nervjs'
import './BaseForm.scss'

import { Breadcrumb, Input, Select, Switch, Checkbox, Radio, Textarea, Button } from '@o2team/at-ui-nerv'
import classnames from 'classnames'

class BaseForm extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  onSubmit = () => {

  }
  render () {
    return (
      <div className='BaseForm'>
        <div className='crumbs'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <i class='el-icon-lx-calendar' /> 表单
            </Breadcrumb.Item>
            <Breadcrumb.Item>基本表单</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={'form-container'}>
          <div className='form-box' >
            <div className='form-item'>
              <label className={'form-item__desc'}>表单名称</label>
              <Input className={'form-item__input'} />
            </div>
            <div className='form-item'>
              <label className={'form-item__desc'}>选择器</label>
              <Select size='large' style='width: 100px'>
                <Select.Option value='bbk'>步步高</Select.Option>
                <Select.Option value='xtc'>小天才</Select.Option>
                <Select.Option value='imoo'>imoo</Select.Option>
              </Select>
            </div>
            <div className='form-item'>
              <label className={'form-item__desc'} >选择开关</label>
              <Switch disabled value='true'>
                <span slot='checkedText'>开</span>
                <span slot='unCheckedText'>关</span>
              </Switch>
            </div>
            <div className='form-item'>
              <label className={'form-item__desc'}>多选框</label>
              <Checkbox.Group
                value={this.state.val4 || ['步步高', '小天才']}
                onChange={(e) => {
                  this.setState({val4: e})
                }
                }
              >
                <Checkbox label='步步高'>步步高</Checkbox>
                <Checkbox label='小天才'>小天才</Checkbox>
                <Checkbox label='imoo'>imoo</Checkbox>

              </Checkbox.Group>
            </div>
            <div className='form-item'>
              <label className={'form-item__desc'}>单选框</label>
              <Radio onChange={(label) => { this.setState({radio2: label}) }} value={this.state.radio1} label='步步高' disabled>步步高</Radio>
              <Radio onChange={(label) => { this.setState({radio2: label}) }} value={this.state.radio1} label='小天才' disabled>小天才</Radio>
              <Radio onChange={(label) => { this.setState({radio2: label}) }} value={this.state.radio1} label='imoo' disabled>imoo</Radio>
            </div>
            <div className='form-item' >
              <label className={'form-item__desc'}>文本框</label>
              <Textarea rows='5' maxRows='5' onInput={() => {}} />
            </div>
            <div className={classnames('form-item', 'form-item__btn')} >
              <Button className={'btn-submit'} type='primary' onClick={this.onSubmit}>表单提交</Button>
              <Button className={'btn-cancel'}>取消</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = BaseForm
