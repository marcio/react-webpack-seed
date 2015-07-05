import React from 'react';
import { RouteHandler } from 'react-router';

class Template extends React.Component {

  render() {
    return (
      <div>
        <RouteHandler path={this.props.path} params={this.props.params}></RouteHandler>
      </div>
    );
  }

}

export default Template;
