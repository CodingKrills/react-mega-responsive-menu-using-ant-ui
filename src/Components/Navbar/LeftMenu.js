import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
    const { md } = useBreakpoint()
    return (
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="1">
                <a href='/'>Navigation One</a>
            </Menu.Item>
            <SubMenu key="sub1" title="Navigation Two - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="SubMenu" title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 5</Menu.Item>
                    <Menu.Item key="setting:2">Option 6</Menu.Item>
                    <Menu.Item key="setting:3">Option 7</Menu.Item>
                    <Menu.Item key="setting:4">Option 8</Menu.Item>
                    <Menu.Item key="setting:5">Option 9</Menu.Item>
                    <Menu.Item key="setting:6">Option 10</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="2">
                <a href='/'>Navigation Four</a>
            </Menu.Item>
        </Menu>
    );
}

export default LeftMenu
