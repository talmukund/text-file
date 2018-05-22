// @flow
import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import styles from './TextBox.css';

type Props = {
  addToFile(text: string): void
};

export default class TextBox extends Component<Props> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addTextToFile = this.addTextToFile.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  async addTextToFile() {
    await this.props.addToFile(this.state.value);
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup
            controlId="formBasicText"
            bsSize="large"
          >
            <div className={styles.counter}>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
            </div>
          </FormGroup>
        </form>
        <Button bsStyle="primary" bsSize="large" className={styles.btnGroup} onClick={this.addTextToFile}>Write</Button>
      </div>
    );
  }
}
