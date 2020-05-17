import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const { clearUsers, users } = githubContext;

  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const handleInput = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='search'
          name='text'
          placeholder='Search Users...'
          className='search'
          value={text}
          onChange={handleInput}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block btn-search'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
