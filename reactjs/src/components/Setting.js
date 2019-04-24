import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class SettingView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            uncommitted: {
                setting: {
                    remote_url: null
                }
            }
        };

        console.log("SettingsConstructor:",props.config)

        if (props.config && props.config.setting) {
            this.state.setting = props.config.setting;

        }
    }

    update_config = () => {
        if (this.state.setting) {
            fetch(this.state.setting.remote_url, {"method": "PATCH", "body": JSON.stringify(this.state.setting)})
            .then(res=>res.json())
            .then(data => console.log(JSON.stringify(data, null, "\t")));
        }
    };

    commit = (value) => {
        this.state.setting.remote_url = value.slice(0)
        this.props.config.setting.remote_url = this.state.setting.remote_url.slice(0)
    }

    render() {
        const TextfieldContent = () => {
            if (!this.state.value){
                this.state.value = this.state.setting && this.state.setting.remote_url ? 
                   this.state.setting.remote_url.slice(0) : null;
            }
            const remote_url_edit = this.state.value ? <TextField 
                id="remote_url_edit"
                label="Remote config link"
                value={this.state["value"]}
                onChange={(event)=>{this.state["value"]=event.target.value; console.log("remoteCHange:",this.state["value"],event.target.value)}}
                margin="normal"
                variant="outlined"
                fullWidth
            /> : null;

            return (
                <form
                    noValidate autoComplete="off">

                    {remote_url_edit}

                    <br/>
                    <Button variant="outlined" color="primary"
                        onClick={() => {
                            this.commit(this.state.value)
                        }}
                    >Confirm</Button>
                </form>
            )
        }

        return(
            <Container>
                <Row className="row-content">
                    <Col className="col-content col-12 col-md-8">
                        <Card>
                            <CardHeader title="Settings" />
                            <CardContent>
                                {TextfieldContent()}
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default SettingView;