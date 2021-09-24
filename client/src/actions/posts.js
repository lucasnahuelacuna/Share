import * as api from '../api'

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.createPost(newPost)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, updatedpost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedpost)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}