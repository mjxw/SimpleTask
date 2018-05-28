import { ADD_TASK, EDIT_TASK, HANDLE_CHANGE, COMPLETE_TASK, UNDO_TASK} from './types';

export function addTask(name) {
    return function(dispatch) {
        dispatch({
            type: ADD_TASK,
            name: name
        });
    }
}

export function editTask(index) {
    return function(dispatch) {
        dispatch({
            type: EDIT_TASK,
            index: index
        });
    }
}

export function handleChange(value) {
    return function(dispatch) {
        dispatch({
            type: HANDLE_CHANGE,
            value: value
        });
    }
}

export function completeTask(index) {
    return function(dispatch) {
        dispatch({
            type: COMPLETE_TASK,
            index: index
        });
    }
}

export function undoTask(index) {
    return function(dispatch) {
        dispatch({
            type: UNDO_TASK,
            index: index
        });
    }
}