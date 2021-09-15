import { likeUser } from '../../lib/api'

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
      const like = await likeUser(likedUserId)
      console.log(like)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{user.username}</div>
          </div>
          <div className="card-content">
            <div className="card-image">
              <figure className="image is-200x200">
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