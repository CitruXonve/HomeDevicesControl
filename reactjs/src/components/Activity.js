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
        console.log('HomeState: ' + JSON.stringify(this.state));

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
            </React.Fragment>
        )
    };
}

export default ActivityView;   