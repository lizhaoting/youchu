import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Input, Icon, Button, Form,
} from 'antd';
import style from './Login.module.scss';
import icon from '../../assets/icon.svg';

const FormItem = Form.Item;

const Login = (props) => {
  const { login, updateLogin, handleLogin } = props;
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
              value={login.userName}
              onChange={e => updateLogin('userName', e.target.value)}
              size="large"
              placeholder="昵称"
            />
          </FormItem>
          <FormItem className={style.formItem}>
            <Input
              value={login.password}
              onChange={e => updateLogin('password', e.target.value)}
              size="large"
              type={login.viewPassword ? 'text' : 'password'}
              placeholder="密码（至少6位）"
              suffix={(
                <Icon
                  type="eye"
                  theme={login.viewPassword ? 'twoTone' : 'outlined'}
                  onClick={() => updateLogin('viewPassword', !login.viewPassword)}
                />
              )}
            />
          </FormItem>
          <FormItem className={style.formItem}>
            <Button type="primary" block size="large" onClick={handleLogin}>登录</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  updateLogin: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
