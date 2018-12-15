import { put, takeEvery } from 'redux-saga/effects'

//#region 

function *handleIncrement(action){
    yield put({type: 'INCREMENT_TARGET', id: action.id});
}

function *handleDecrement(action){
    yield put({type: 'DECREMENT_TARGET', id: action.id});
}

function *handleDelete(action){
    yield put({type: 'DELETE_TARGET', id: action.id});
}

function *handleAdd(){
    yield put({type: 'ADD_TARGET'})
}

//#endregion

function *targetSaga(){
    yield takeEvery('TARGET_INCREMENT_REQUEST', handleIncrement)
    yield takeEvery('TARGET_DECREMENT_REQUESTED', handleDecrement)
    yield takeEvery('TARGET_DELETE_REQUESTED', handleDelete)
    yield takeEvery('TARGET_ADD_REQUESTED', handleAdd)
}

export default targetSaga;