import * as TrackAPIUtil from '../util/track_api_util'

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const receiveTrack = (track) => {
    return {
        type: RECEIVE_TRACK,
        trackResponse: track
    }
}

export const receiveTracks = (tracks) => {
    return {
        type: RECEIVE_TRACKS,
        tracks
    }
}

export const removeTrack = (track) => {
    return {
        type: REMOVE_TRACK,
        trackResponse: track
    }
}

export const fetchTrack = (trackId) => (dispatch) => {
    return TrackAPIUtil.fetchTrack(trackId).then(
        trackResponse => dispatch(receiveTrack(trackResponse))
    )
}

export const fetchTracks = () => (dispatch) => {
    return TrackAPIUtil.fetchTracks().then(
        tracks => dispatch(receiveTracks(tracks))
    )
}

export const uploadTrack = (formData) => (dispatch) => {
    return TrackAPIUtil.uploadTrack(formData).then(
        uploadedTrack => (dispatch(receiveTrack(uploadedTrack)))
    );
};

export const updateTrack = (formData, id) => (dispatch) => {
    return TrackAPIUtil.updateTrack(formData, id).then(
        updatedTrack => (dispatch(receiveTrack(updatedTrack)))
    );
}

export const deleteTrack = (id) => (dispatch) => {
    return TrackAPIUtil.deleteTrack(id).then(
        deletedTrack => (dispatch(removeTrack(deletedTrack)))
    )
}

