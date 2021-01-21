import actionTypes from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => {
	return {
		type: actionTypes.addTodo,
		payload: {
			id: nextTodoId++,
			text
		}
	};
};

export const removeTodo = id => {
	return {
		type: actionTypes.removeTodo,
		payload: { id }
	};
};

export const beginFetchTodoList = () => {
	return {
		type: actionTypes.beginFetchTodoList,
		payload: { isFetchingTodoList: true }
	};
};

export const finishFetchTodoList = error => {
	return {
		type: actionTypes.finishFetchTodoList,
		payload: { isFetchingTodoList: false, error }
	};
};

export const recvFetchTodoListResult = todos => {
	return { type: actionTypes.recvFetchTodoListResult, payload: { todos } };
};

// 1. 開始呼叫後端資料API
export const fetchTodosFromServer = page => {
	// 回傳函式，使redux-thunk middleware可以處理
	return (dispatch, getState) => {
		// 1-1 通知使用者應用程式正在擷取後端資料，呈現載入中狀態
		// 這邊直接呼叫寫好的同步action creator建立action
		// 非同步Action從這邊開始逐一拆解成同步Action
		dispatch(beginFetchTodoList());

		// 1-2 驗證參數
		if (!page) page = 1;

		// 1-3 組裝呼叫後端資料API所需參數呼叫，fetch函式抓取後端資料
		const API_URL =
		
			'http://598071fd5b25f700119caaf6.mockapi.io/api/v2/todo?page=' +
			page +
			'&limit=10';

		fetch(API_URL, { mode: 'cors' })
			// 2. 收到後端資料API結果
			.then(response => {
				console.log('response', response.status);
				if (response.ok !== true) {
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					response.json().then(todos => {
						dispatch(recvFetchTodoListResult(todos));
						dispatch(finishFetchTodoList(200));

						console.log(todos);
					});
				}
			})
			.catch(error => {
				console.log('error', error);
				// 2-1 網路問題無法呼叫，通知使用者，並取消載入狀態
				dispatch(finishFetchTodoList(error));
			});
	};
};
