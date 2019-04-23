import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Container, Table, Jumbotron } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

class ActivityView extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };

        if (props.config) {
            // this.setState({'config': props.config});
            //+'\n'+JSON.stringify({'prop':props.config}));
            this.state.config = props.config;
        }
        console.log('HomeState: ' + JSON.stringify(this.state).slice(0,30));

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const panel_generator = (type_keyword, display_log_limit_cnt) => {
            const device_list = this.state.config ? this.state.config.device : null;
            const spec_device_list = Array.isArray(device_list) ?
                    device_list.filter((device) => device.type === type_keyword) : null;
            const spec_device = Array.isArray(spec_device_list) && spec_device_list.length>0 ? spec_device_list[0] : null;
            const spec_device_attr_list = Array.isArray(spec_device_list) && spec_device_list.length>0 ? spec_device_list[0].attribute : null;
            
            const spec_device_attr_th = Array.isArray(spec_device_attr_list) ?
            spec_device_attr_list.map(attr => {
                return(
                    <th>{attr}</th>
                    )
                }) : null;

            const spec_device_attr_tr = Array.isArray(spec_device_list) && spec_device_list.length>0 && Array.isArray(spec_device_list[0].log) ? 
                spec_device_list[0].log.map(record => {
                    var row=[]
                    spec_device_attr_list.forEach(attr => row.push(<td>{record[attr]}</td>))
                    return(<tr>{row}</tr>);
                })
                : null;
                
            // console.log(spec_device)
            const fa_label = spec_device ? spec_device.fa_label : null;
            // console.log(<span className={"fa "+fa_label+" fa-2x device-type-icon"}></span>)
            // console.log('spec_device_panel_view',spec_device_attr_tr)
            
            return(
                <Col md="6" className="col-content">
                    {spec_device_list && spec_device_attr_list ? 
                        <Card body>
                            <CardTitle>
                                {fa_label ? <span className={"fa "+fa_label+" fa-2x device-type-icon"}></span> : null}
                                {/* <span className="fa fa-lightbulb-o fa-2x device-type-icon"></span> */}
                                {spec_device.title ? spec_device.title : "No Name"}
                            </CardTitle>
                            <CardText>{spec_device.description ? spec_device.description : "No Description"}</CardText>
                            <Table light>
                                <thead>
                                    <tr>
                                        {spec_device_attr_th}
                                    </tr>
                                </thead>
                                <tbody>
                                    {spec_device_attr_tr.slice(0,display_log_limit_cnt)}
                                </tbody>
                            </Table>
                            <Button size="sm" className="btn-info">Details</Button>
                        </Card>
                        : <div></div>}
                </Col>
            )
        }

        const light_panel = panel_generator('light',3);
        const camera_panel = panel_generator('camera',5);
        const coffee_maker_panel = panel_generator('coffee_maker',4)

        return (
            <React.Fragment>
                <Jumbotron className="d-none d-sm-none d-md-block">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <h1>Get inspired && Start up!</h1>
                                <p>A glance at all your Smart Devices</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Container>
                    <Row className="row-content">
                        {light_panel}
                        {camera_panel}
                        {coffee_maker_panel}
                    </Row>
                </Container>
                {/* <Nav tabs>
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
                </TabContent> */}
            </React.Fragment>
        )
    };
}

export default ActivityView;   