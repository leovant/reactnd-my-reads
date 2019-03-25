import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Button, Radio } from 'antd';

class ShelfMenu extends Component {
  state = {
    visible: false
  };

  handleShelfChange = event => {
    this.setState(() => ({ visible: false }));

    if (this.props.onShelfChange) {
      this.props.onShelfChange(event.target.value);
    }
  };

  handleVisibleChange = visible => {
    this.setState(() => ({ visible }));
  };

  render() {
    const { shelf } = this.props;
    const content = (
      <div>
        <Radio.Group value={shelf} onChange={this.handleShelfChange}>
          <Radio.Button value="currentlyReading">
            Currently Reading
          </Radio.Button>
          <Radio.Button value="wantToRead">Want to Read</Radio.Button>
          <Radio.Button value="read">Read</Radio.Button>
          <Radio.Button value="none">None</Radio.Button>
        </Radio.Group>
      </div>
    );
    return (
      <Popover
        title="Move to..."
        content={content}
        trigger="click"
        placement="bottomLeft"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button size="large" icon="caret-down" shape="circle" />
      </Popover>
    );
  }
}

ShelfMenu.propTypes = {
  shelf: PropTypes.string,
  onShelfChange: PropTypes.func
};

export default ShelfMenu;
