import React, { Component } from 'react';
import UrlForm from '../../../APIInput/UrlForm';


export class RESTy extends Component {
    state = {
      url: '',
      methond: '',
      output: '',
      response: ''
    };

    render() {
      const { url, method, output, response } = this.state; 

      return (
        <>
          <UrlForm 
            url={url} 
            methond={method}
            output={output}
            response={response}
            onchange={this.handleChange}
            onSubmit={this.handleSumbit}
          />
        </>
      );
    }
}

export default RESTy;
