import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <span className="fa fa-home fa-lg"></span>Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Moar Tabs
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col className="col-sm-12 col-md-8 offset-md-2">
                                <h4>Tab 1 Contents</h4>
                                <ul>
                                    <li class="item-excerpt"><span>标签

                                    发布内容请使用标签。 &nbsp;
                                    标签分为内容标签和功能标签两类。目前，共有 6 个内容标签和 2 个功能标签。 &nbsp;

                                    内容标签

                                    站务

                                    欢迎使用 意见与建议 子标签提出意见。 &nbsp;

                                    算法

                                    讨论（不涉及具体题目）的算法。例如「网络流算法哪家强？」。 &nbsp;

                                    题目

                                    以题目为单位讨论解法。 &nbsp;
                                    建议使用题目来源和名称作为标题，例如「Codeforces Round #328 E Bear and ...</span>
                                    </li>
                                    <li class="item-excerpt"><span>大家好！ &nbsp;

                                            ICPCCamp 2016 报名开始了！ &nbsp;

                                            详情请访问我们的网站 http://icpc-camp.org &nbsp;

                                            如有问题欢迎在本帖内回复！ &nbsp;</span>
                                    </li>

                                    <li class="item-excerpt"><span>大家好！ &nbsp;

                                            论坛开通了微信订阅号，现提供 「AsyncIO 每日精选」推送，欢迎订阅！ &nbsp;

                                            可搜索 ICPCCamp 或扫描下方二维码： &nbsp;
                                            &nbsp;

                                            如果有好的意见和建议欢迎在本帖或微信中提出 。 &nbsp;



                                            同时，聪明的你已经发现，我们的论坛拥有了新的配色和 Logo！ &nbsp;

                                            随着美工团队水平的日益精进，原先的配色弱鸟叉鶸茶色已经获得进化。 &nbsp;
                                            新颜色是温和宜人的蓝色，同时它的 16 进...</span>
                                    </li>
                                    <li>
                                        
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </React.Fragment>
            // <div id="exTab3" className="container">	
            //     <ul className="nav nav-pills">
            //         <li className="active">
            //         <a  href="#1b" data-toggle="tab">Overview
            //         <span classNameName="fa fa-home fa-lg"></span>Home
            //         </a>
            //         </li>
            //         <li><a href="#2b" data-toggle="tab">Using nav-pills</a>
            //         </li>
            //         <li><a href="#3b" data-toggle="tab">Applying clearfix</a>
            //         </li>
            //         <li><a href="#4a" data-toggle="tab">Background color</a>
            //         </li>
            //     </ul>

            //     <div className="tab-content clearfix">
            //         <div className="tab-pane active" id="1b">
            //             <h3>Same as example 1 but we have now styled the tab's corner</h3>
            //         </div>
            //         <div className="tab-pane" id="2b">
            //             <h3>We use the className nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
            //         </div>
            //         <div className="tab-pane" id="3b">
            //             <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
            //         </div>
            //         <div className="tab-pane" id="4b">
            //             <h3>We use css to change the background color of the content to be equal to the tab</h3>
            //         </div>
            //     </div>
            // </div>

        )
    };
}

export default Home;   