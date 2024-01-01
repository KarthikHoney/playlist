import {MdDelete} from 'react-icons/md'
import './index.css'

const PlaylistItems = props => {
  const {playlistDetails} = props
  const {imageUrl, name, genre, duration} = playlistDetails

  return (
    <li className="listItemContainer">
      <div className="containerElements">
        <img src={imageUrl} alt={name} className="playlistPic" />
        <div className="playlistName">
          <h1 className="name">{name}</h1>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="durationContainer">
        <p className="duration">{duration}</p>
        <MdDelete className="icon" />
      </div>
    </li>
  )
}
export default PlaylistItems
