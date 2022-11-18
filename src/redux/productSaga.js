import { takeEvery, call, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

function* getProducts() {
    let data = yield fetch("http://localhost:3500/products")
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProduct(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.data}`)
    result = yield result.json();
    yield put({ type: SET_PRODUCT_LIST, "data": result })
}

// Watcher Saga
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProduct)
}


export default productSaga;