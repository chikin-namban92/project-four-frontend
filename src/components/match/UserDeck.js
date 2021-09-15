import { likeUser } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

function UserDeck({ user }) {

  const displayCatnipPreference = () => {
    if (user.catnip === true) return '✅'
    return '❌'
  }

  const handleDislike = (e) => {
    e.target.user.remove()
  }

  const handleLike = async (e) => {
    const likedUserId = e.target.parentElement.id
    console.log(likedUserId)
    try {
      // if (!isAuthenticated()) throw new Error
      const like = await likeUser(likedUserId)
      console.log(like)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{user.username}</div>
          </div>
          <div className="card-content">
            <div className="card-image">
              <figure className="image is-128x128">
                <img className="is-rounded" src={user.image} alt={user.username}/>
              </figure>
            </div>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
            <p>Interests: {user.interests}</p>
            <p>Catnip: {displayCatnipPreference()}</p>
          </div>
          <footer className="card-footer" id={user.id}>
            <button className="button card-footer-item" onClick={handleDislike}>
              👎
            </button>
            <button className="button card-footer-item" onClick={handleLike}>
              ❤️
            </button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default UserDeck