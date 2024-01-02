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
          <img src={imageUrl} alt="track" className="playlistPic" />
          <div className="playlistName">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="durationContainer">
          <p className="duration">{duration}</p>
          {/* eslint-disable-next-line */}
          <button
            type="button"
            onClick={onDeleteIconClick}
            className="icon"
            data-testid="delete"
          >
            <AiOutlineDelete size={20} />
          </button>
        </div>
      </li>
    </div>
  )
}
export default PlaylistItems
