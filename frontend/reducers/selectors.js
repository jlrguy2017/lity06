export const findTrack = ({entities}, trackId) => {
    let tracksArr = Object.values(entities.tracks);
    if(tracksArr.length === 0) {
        return {};
    }
    for(let i = 0; i < tracksArr.length; i++) {
        let track = tracksArr[i];
        if(track.id === parseInt(trackId)) {
            return track;
        }
    }
    return {};
}

export const findTrackArtist = (users, trackId) => {
    let usersArr = Object.values(users);
    for (let i = 0; i < usersArr.length; i++) {
        let user = usersArr[i];
        if (user.track_ids.some((id) => id === trackId)) {
            return user;
        }
    }
    return {};
};

export const currentUser = ({entities, session}) => {
    return entities.users[session.currentUserId];
}

export const findTrackByTitle = ({entities}, title) => {
    let tracksArr = Object.values(entities.tracks);
    for(let i = 0; i < tracksArr.length; i++) {
        if(tracksArr[i].title === title) {
            return tracksArr[i];
        }
    }
    return null;
}

export const findAllTracksByUser = ({entities}, user) => {
    if(Object.values(entities.tracks).length > 0 && user) {
        let userTracks = [];
        user.track_ids.forEach((trackId) => {
            userTracks.push(entities.tracks[trackId]);
        })
        return userTracks;
    }
}