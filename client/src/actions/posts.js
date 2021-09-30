import * as api from '../api'
import { CREATE, FETCH_ALL, FETCH_BY_SEARCH, DELETE, UPDATE, LIKE } from '../constants/actionTypes'

//Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.createPost(newPost)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, updatedpost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedpost)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error)
    }
}