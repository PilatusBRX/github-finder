import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = props => {
  const { avatar_url, login } = props.user;
  return (
    <div className='card text-center' style={{ padding: '20px' }}>
      <img
        src={avatar_url}
        alt=''
        className='rounded-circle'
        style={{ width: '60px', margin: 'auto' }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
