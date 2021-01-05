import React from 'react';
import { Menu, Grid } from 'antd';
import { Button } from 'antd';
const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="app">
        <a href="/">Signup</a>
      </Menu.Item>
      <Menu.Item key="mail">
        <a href="/"><Button type="primary" block>Primary Button</Button></a>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;
