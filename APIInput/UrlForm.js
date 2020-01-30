import React from 'react';
import PropTypes from 'prop-types';

const UrlForm = ({ url, onSubmit }) => {
  <form onSubmit={onSubmit}>
    <input type="text" name="url" placeholder="URL" value={url} />
    
  </form>;
}
;

export default UrlForm;
