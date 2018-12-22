import { call, put, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga';

//#region 

function *handleDecrement(action){
    const list = yield select(state => state.targets.list);
    const TIME_INTERVAL = yield select(state => {
        const level = state.game.levelList.find(l => l.isSelected);
        return level === undefined ? 1000 : level.decrementTime; 
    });

    const target = list.find(x => x.id === action.id);

    if (target != undefined){
        if (target.value !== 0){
            yield call(delay, TIME_INTERVAL);
            yield put({type: 'DECREMENT_TARGET', id: action.id});
            yield put({type: 'TARGET_DECREMENT_REQUESTED', id: action.id});
        }
        else
        {
            yield put({type: 'DELETE_TARGET', id: action.id});
            yield put({type: 'LIVES_DECREMENT'});
        }
    }
}

function *handleDelete(action){
    yield put({type: 'DELETE_TARGET', id: action.id});
    yield put({type: 'SCORE_INCREMENT'})
}

function *handleAdd(){
    const spawnNumber = yield select(state => state.game.spawnNumber);
    for (let index = 0; index < spawnNumber; index++) {
        const id = yield select(state => state.targets.lastId);
        
        yield put({type: 'ADD_TARGET', id: id + 1});
        yield put({type: 'TARGET_DECREMENT_REQUESTED', id: id + 1})
    }
}

//#endregion

function *targetSaga(){
    yield takeEvery('TARGET_DECREMENT_REQUESTED', handleDecrement)
    yield takeEvery('TARGET_DELETE_REQUESTED', handleDelete)
    yield takeEvery('TARGET_ADD_REQUESTED', handleAdd)
}

export default targetSaga;