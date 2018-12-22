import { call, put, select, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga';

const SPAWN_TIME = 1000;

function *handleGame(){
    yield put({type: 'GAME_START'});
    while (true){
        const isStarted = yield select(state => state.game.isStarted);
        
        if (!isStarted)
            break;

        yield call(delay, SPAWN_TIME);
        yield put({type: "TARGET_ADD_REQUESTED"});
    }
}

function *handleReset(){
    yield put({type: 'GAME_RESTART'});
    yield put({type: 'TARGETS_RESTART'});
}

function *handleScoreIncrement(){
    yield put({type: 'SCORE_INCREMENT'});
}

function *gameSaga(){
    yield takeEvery('GAME_START_REQUESTED', handleGame)
    yield takeEvery('GAME_RESTART_REQUESTED', handleReset)
    yield takeEvery('SCORE_INCREMENT_REQUESTED', handleScoreIncrement)
}

export default gameSaga;