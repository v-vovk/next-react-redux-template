import * as types from '../types'

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: types.GET_POSTS,
    payload: ['1st', '2nd', '3rd']
  })
}
