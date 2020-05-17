import React, { useEffect, Fragment, useContext } from 'react';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';
import { FaCheck, FaRegTimesCircle } from 'react-icons/fa';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user; //user não vem do context

  if (loading) return <Loading />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable: {''}
      {hireable ? (
        <FaCheck className='text-success' />
      ) : (
        <FaRegTimesCircle className='text-danger' />
      )}
      <div className='container'>
        <div className='card grid-2'>
          <div className='row'>
            <div className='col-md-6 p-5 text-center'>
              <div className='all-center'>
                <img
                  src={avatar_url}
                  className='rounded-circle'
                  style={{ width: '150px' }}
                  alt=''
                />
                <h1>{name}</h1>
                <p>Location: {location}</p>
              </div>
            </div>
            <div className='col-md-6 py-5'>
              <div>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}

                <div className='attributes'>
                  <p>
                    {login && (
                      <Fragment>
                        <strong>Username: </strong>
                        {login}
                      </Fragment>
                    )}
                  </p>

                  <p>
                    {company && (
                      <Fragment>
                        <strong>Company: </strong>
                        {company}
                      </Fragment>
                    )}
                  </p>

                  <p>
                    {blog && (
                      <Fragment>
                        <strong>Website: </strong>
                        {blog}
                      </Fragment>
                    )}
                  </p>
                </div>
                <a
                  href={html_url}
                  className='btn btn-dark my-1'
                  style={{ width: '250px' }}
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='card text-center mt-2 p-4 '>
          <ul className='card-badges'>
            <li>Followers: {followers}</li>
            <li className='bg-secondary'>Following: {following}</li>
            <li className='bg-warning'>Public Repos: {public_repos}</li>
            <li className='bg-danger'>Public Gists: {public_gists}</li>
          </ul>
        </div>
      </div>
      <div className='container mt-2 repo'>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;
