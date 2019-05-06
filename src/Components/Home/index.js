import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import './index.css';
const {
  Header, Footer, Sider,
} = Layout;
const MenuItem = Menu.Item;
export default class Home extends Component {
    state = {
        collapsed: false,
      };

      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                    }}
                >
                <div className="logo">node-blog</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <MenuItem key="1">
                        <Icon type="user" />
                        <span className="nav-text">about</span>
                        </MenuItem>
                        <MenuItem key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">play</span>
                        </MenuItem>
                        <MenuItem key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                        </MenuItem>
                        <MenuItem key="4">
                        <Icon type="bar-chart" />
                        <span className="nav-text">nav 4</span>
                        </MenuItem>
                        <MenuItem key="5">
                        <Icon type="cloud-o" />
                        <span className="nav-text">nav 5</span>
                        </MenuItem>
                        <MenuItem key="6">
                        <Icon type="appstore-o" />
                        <span className="nav-text">nav 6</span>
                        </MenuItem>
                        <MenuItem key="7">
                        <Icon type="team" />
                        <span className="nav-text">nav 7</span>
                        </MenuItem>
                        <MenuItem key="8">
                        <Icon type="shop" />
                        <span className="nav-text">nav 8</span>
                    </MenuItem>
                </Menu>
                </Sider>
                <Layout style={{ marginLeft: this.state.collapsed ? '80px' : '200px' }}>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </Header>
                {this.props.children}
                <Footer style={{ textAlign: 'center' }}>
                    nodejs-react-blog ©2019 Created by M.
                </Footer>
                </Layout>
            </Layout>
        )
    }
}
