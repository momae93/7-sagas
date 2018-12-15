import { call, put, takeEvery } from 'redux-saga/effects'
import {delay} from 'redux-saga';

function *handleGame(){
    yield put({type: 'GAME_START'});
    while (true){
        yield call(delay, 1000);
        yield put({type: "TARGET_ADD_REQUESTED"});
    }
}

function *gameSaga(){
    yield takeEvery('GAME_START_REQUESTED', handleGame)
}

export default gameSaga;