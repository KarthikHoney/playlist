import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlaylistItems = props => {
  const {playlistDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = playlistDetails

  const onDeleteIconClick = () => {
    onClickDelete(id)
  }

  return (
    <div>
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
          {/* eslint-disable-next-line */}
          <button type="button" onClick={onDeleteIconClick}>
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </li>
    </div>
  )
}
export default PlaylistItems
