export const selectedTvShowReducer = (selectedTvShow = null, action) => {
    if (action.type === 'TVSHOW_SELECTED') {
        return action.payload;
    }

    return selectedTvShow;
}