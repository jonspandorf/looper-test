import TrackItem from "./trackItem"

const TrackList = ({tracks}) => {
    return(
        <>
        <ul classList="list-group">
            {tracks.map(track => {
                return (
                    <TrackItem key={track.id} track={track} />
                )
            })}
        </ul>
        </>
    )
}

export default TrackList