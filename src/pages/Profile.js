import {Link, useParams} from 'react-router-dom'
import {useContext, useEffect} from 'react'
import {GithubContext} from '../context/github/githubContext'
import {Repos} from '../components/Repos'

export const Profile = () => {
  const {name: urlName} = useParams()
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) return <p className="text-center">Loading...</p>

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos, public_gists
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">Go Home</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mb-3"
              >Open Profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge bg-primary me-1">Followers: {followers}</div>
              <div className="badge bg-success me-1">Following: {following}</div>
              <div className="badge bg-info me-1">Repos: {public_repos}</div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}