import React from 'react';
import PropTypes from 'prop-types';

const UrlForm = ({ url, onSubmit, output, onChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" placeholder="URL" value={url} />
    <textarea name="output" value={output} onChange={onChange}></textarea>

    <input type="radio" name="radio" placeholder="GET" value={get} />
    <input type="radio" name="radio" placeholder="POST" value={post} />
    <input type="radio" name="radio" placeholder="PUT" value={put} />
    <input type="radio" name="radio" placeholder="PATCH" value={patch} />
    <input type="radio" name="radio" placeholder="DELETE" value={delet} />

    <button>GO</button>
  </form>
);

UrlForm.propTypes = {
  url: PropTypes.string.isRequired, 
  output: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UrlForm;
