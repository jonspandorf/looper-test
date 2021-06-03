const TrackItem = ({track}) => {

    const { owner, bpm } = track

    const handleSinglePlay = (e) => {
        e.preventDefault();
        // TODO
    }
    return(
        <>
        <li className="list-group-item">
            <div>
                
            </div>
            <div>
                <button onClick={handleSinglePlay}>Play</button>
            </div>
            <div>
                <div>{owner}</div>
                <div>Find Inst</div>
                <div>BPM: {bpm}</div>
            </div>
        </li>
        </>
    )
}

export default TrackItem