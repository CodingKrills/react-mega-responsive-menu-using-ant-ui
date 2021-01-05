import React, { useState } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';


const Navbar = () => {


    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };


    return (
        <div>
            <nav className="menuBar">
                <div className="container">

                    <div className="logo">
                        <a href="/">logo</a>
                    </div>
                    <div className="menuCon">
                        <div className="leftMenu">
                            <LeftMenu />
                        </div>
                        <div className="rightMenu">
                            <RightMenu />
                        </div>
                        <Button className="barsMenu" type="primary" onClick={showDrawer}
                        >
                            <span className="barsBtn"
                            ></span>
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement="right"
                            closable={true}
                            onClose={onClose}
                            visible={visible}
                        >
                            <LeftMenu />
                            <RightMenu />
                        </Drawer>

                    </div>
                </div >
            </nav>
        </div >
    )
}

export default Navbar
