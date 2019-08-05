import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Input, Icon, Button, Form,
} from 'antd';
import classnames from 'classnames';
import style from './Register.module.scss';
import icon from '../../assets/icon.svg';

const FormItem = Form.Item;

const Register = (props) => {
  const { register, updateRegister, handleRegister } = props;
  return (
    <div className={style.container}>
      <Card
        hoverable
        className={style.card}
      >
        <div className={style.cardLogo}>
          <img src={icon} alt="logo" />
        </div>
        <div className={style.slogon}>
          <h2>欢迎加入语雀</h2>
          <p>写文档，就用语雀</p>
        </div>
        <Form>
          <FormItem
            className={style.formItem}
          >
            <Input
              value={register.userName}
              onChange={e => updateRegister('userName', e.target.value)}
              size="large"
              placeholder="昵称"
            />
          </FormItem>
          <FormItem className={style.formItem}>
            <Input
              value={register.phoneNumber}
              onChange={e => updateRegister('phoneNumber', e.target.value)}
              size="large"
              addonBefore="+86"
              placeholder="仅支持中国大陆手机号码"
            />
          </FormItem>
          <FormItem className={style.formItem}>
            <Input
              value={register.password}
              onChange={e => updateRegister('password', e.target.value)}
              size="large"
              type={register.viewPassword ? 'text' : 'password'}
              placeholder="密码（至少6位）"
              suffix={(
                <Icon
                  type="eye"
                  theme={register.viewPassword ? 'twoTone' : 'outlined'}
                  onClick={() => updateRegister('viewPassword', !register.viewPassword)}
                />
              )}
            />
          </FormItem>
          <FormItem className={style.formItem}>
            <Input
              value={register.mail}
              onChange={e => updateRegister('mail', e.target.value)}
              size="large"
              placeholder="邮箱"
            />
          </FormItem>
          <FormItem className={style.formItem}>
            <Button type="primary" block size="large" onClick={handleRegister}>注册</Button>
          </FormItem>
        </Form>
        <div className={classnames(style.formItem, style.center)}>
          <span>点击注册，即代表你同意</span>
          <a href="https://www.yuque.com/terms" target="_blank" rel="noopener noreferrer">《语雀服务协议》</a>
        </div>
      </Card>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
  }).isRequired,
  updateRegister: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export default Register;
