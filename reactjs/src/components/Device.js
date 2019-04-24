import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import OutlinedTextFields from './Textfield';
import SimpleCard from './Card';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const form_styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const local_config_default = '../../data/config.json';
const remote_config_default = 'https://smart-dev-2c89f.firebaseio.com/smart_devices.json'

class DeviceView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //     "device": {
            //         "light": {
            //             "status": {
            //                 "checked": false,
            //                 "name": "AAA",
            //                 "time": 123,
            //             }
            //         }
            //     },
            //     "checkedB": false
        };

        if (props.config) {
            this.state.config = props.config;
            // alert(0)
            // const promise = new Promise(()=>this.setState({['config']: props.config}),()=>alert("error1"))
            // alert(props.config)
            // promise.then(()=>console.log('DeviceStateSet: ' + JSON.stringify(this.state).slice(0,50)),()=>alert("error2"))
        }
        // else
        //     console.log('DeviceStateUnset: ' ,JSON.stringify(this.state),":",JSON.stringify(props.config));
        // alert(this.state.config)
    }


    handleChange = name => event => {
        // this.setState({
        //     [name]: event.target.checked,
        // });
        this.state[name] = event.target.checked
        this.forceUpdate()
        console.log('Device status', JSON.stringify(this.state))
    };

    // handleChange = event => {
    //     console.log('Device state change:', event.target)
    // }

    update_config = () => {if (this.state.config) {
        fetch(remote_config_default, {"method": "PATCH", "body": JSON.stringify(this.state.config)})
        .then(res=>res.json())
        .then(data => console.log(JSON.stringify(data, null, "\t")));
    }};

    render() {
        const TextfieldContent = (device) => {

            var attr_input_list = Array.isArray(device.attribute) ?
            device.attribute.map((attr) => attr!=="is_on" ? 
                    <TextField 
                        id={device.type+"_"+attr}
                        label={attr}
                        value={device.status[attr]}
                        onChange={(event)=>{device.status[attr]=event.target.value; this.forceUpdate();}}
                        // value={this.state.config.device[0].status["time"]}
                        //   defaultValue="foo"
                        //   className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    /> : null
                ) : null

            return (
                <form
                    onChange={
                        event => {
                            console.log('form change', JSON.stringify(device.status))
                            // console.log("form change: ", event.target.id, event.target, event.target.value)
                            // this.state.config.device[0].status[event.target.id] = event.target.value
                            // this.forceUpdate()
                        }
                    }
                    noValidate autoComplete="off">

                    {attr_input_list}
                    {/*<TextField
                    id="time"
                    label="Time"
                    caption="time"
                    value={this.state.config.device[0].status["time"]}
                    //   defaultValue="foo"
                    //   className={classes.textField}
                    margin="normal"
                    variant="outlined"
                /> */}

                    <Button variant="outlined" color="primary"
                        onClick={() => {
                            // console.log("Form submit: ", JSON.stringify(this.state.config.device[0]))
                            this.update_config()
                        }}
                    >Confirm</Button>
                </form>
            )
        }


        const card_generator = (type_keyword) => {
            const device_list = Array.isArray(this.state.config.device) ? this.state.config.device : null;

            var spec_device_list = Array.isArray(device_list) ?
                device_list.filter((device) => device.type === type_keyword) : null;
            var spec_device = Array.isArray(spec_device_list) && spec_device_list.length > 0 ? spec_device_list[0] : null;

            return (
                <Card>
                    <CardHeader
                        avatar={<span className={"fa " + spec_device.fa_label + " fa-2x device-type-icon"}></span>}
                        title={spec_device.title}
                        subheader={spec_device["description"] ? spec_device.description : "[No description]"}
                    />
                    <CardContent>
                        {
                            Array.isArray(spec_device["attribute"]) && spec_device["attribute"].includes('is_on') ?
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                id={spec_device.title + "_switch"}
                                                checked={spec_device.status.is_on}
                                                // onChange={this.handleChange('light')}
                                                onChange={event => {
                                                    spec_device.status.is_on = event.target.checked; this.forceUpdate();
                                                    this.update_config()
                                                    console.log('SwitchState: ', event.target.id, event.target.checked)
                                                }}
                                                // value={spec_device.type+"-switch"}
                                                color="primary"
                                            />
                                        }
                                        label="On/Off"
                                    />
                                </FormGroup> : <div></div>
                            /* <FormGroup row>
                            <FormControlLabel
                            control={
                                <Switch
                                checked={this.state.config.device[0].status.is_on}
                                // onChange={this.handleChange('light')}
                                onChange={event => { this.state.config.device[0].status.is_on = event.target.checked; this.forceUpdate(); }}
                                value="light-switch"
                                color="primary"
                                />
                            }
                            label="On/Off"
                            />
                            </FormGroup> */
                        }
                        {TextfieldContent(spec_device)}
                    </CardContent>
                </Card>
            )
        }

        const light_card = card_generator('light')
        const camera_card = card_generator('camera')
        const coffee_maker_card = card_generator('coffee_maker')

        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Device List</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader
                                avatar={<span className={"fa fa-lightbulb-o fa-2x device-type-icon"}></span>}
                                title="My light bulb"
                                subheader="[No description]"
                            />
                            <CardContent>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.config.device[0].status.is_on}
                                                // onChange={this.handleChange('light')}
                                                onChange={event => { this.state.config.device[0].status.is_on = event.target.checked; this.forceUpdate(); }}
                                                value="light-switch"
                                                color="primary"
                                            />
                                        }
                                        label="On/Off"
                                    />
                                </FormGroup>
                                {TextfieldContent}

                            </CardContent>
                        </Card>
                        {/* <OutlinedTextFields content={TextfieldContent}/> */}
                        {/* <SimpleCard /> */}
                        {light_card}
                        {camera_card}
                        {coffee_maker_card}
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default DeviceView;