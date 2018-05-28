import { ADD_TASK, EDIT_TASK, HANDLE_CHANGE, COMPLETE_TASK, UNDO_TASK} from '../actions/types';

const initialState= {
	items: [],
	editValue: ''
}

export default function(state = initialState, action) {
	switch(action.type) {
		case ADD_TASK: 
			const newTask = {
				taskName: action.name, 
				completed: false, 
				active: true,
			}			
			let updatedTasks = state.items.slice();
			updatedTasks.push(newTask);
			return {
				...state,
				items: updatedTasks
			}

		case EDIT_TASK: 
			let editedTasks = state.items.slice();
			editedTasks[action.index].taskName = state.editValue;
			state.editValue = '';
			return {
				...state,
				items: editedTasks
			}
		
		case HANDLE_CHANGE: 
			let changedValue = action.value;
			return {
				...state,
				editValue: changedValue
			}

		case COMPLETE_TASK: 
			let completedTasks = state.items.slice();
			completedTasks[action.index].active = false;
			completedTasks[action.index].completed = true;
			return {
				...state,
				items: completedTasks
			}

		case UNDO_TASK: 
			let undoneTasks = state.items.slice();
			undoneTasks[action.index].active = true;
			undoneTasks[action.index].completed = false;
			return {
				...state,
				items: undoneTasks
			}
		
		default: 
			return state;			
	}
}