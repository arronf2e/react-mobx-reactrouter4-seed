import React, { Component} from 'react';

import { Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';

import RouteWithSubRoutes from '../../routes/routeswithsubroutes';

import { layout as layoutConfig } from '../../config';


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const logoStyle = {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
}

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const { routes } = this.props.route;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" style={logoStyle}/>
                    <Menu theme="dark" mode="inline">
                        {
                            layoutConfig.map(level1 => {
                                if(level1.children && level1.children.length) {
                                    return (
                                        <SubMenu key={level1.index} title={<span><Icon type={level1.icon} />{!this.state.collapsed ? level1.name : ''}</span>}>
                                            {
                                                level1.children.map(level2 => {
                                                    if(level2.children && level2.children.length) {
                                                        return (
                                                            <SubMenu key={level2.index} title={<span><Icon type={level2.icon} />{level2.name}</span>}>
                                                                {
                                                                    level2.children.map(level3 => (
                                                                        <Menu.Item key={level3.index}>
                                                                            <Icon type={level3.icon} />
                                                                            <span className="nav-text">{level3.name}</span>
                                                                        </Menu.Item>
                                                                    ))
                                                                }
                                                            </SubMenu>
                                                        )
                                                    }
                                                    return (
                                                        <Menu.Item key={level2.index}>
                                                            <Link to={level2.link}>
                                                                <Icon type={level2.icon} />
                                                                <span className="nav-text">{level2.name}</span>
                                                            </Link>
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                                }
                                return (
                                    <Menu.Item key={level1.index}>
                                        <Link to={level1.link}>
                                            <Icon type={level1.icon} />
                                            <span className="nav-text">{level1.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ height: '100vh' }}>
                    <Header style={{ background: '#fff', paddingLeft: '16px' }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', height: '100%'}}>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route}/>
                            ))}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default MainLayout;
