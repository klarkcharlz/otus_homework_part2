import rootReducer from './reducers';
import { applyMiddleware, createStore, Dispatch } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

/*
    Пример использования
    store.dispatch(setName('John')); // Сохранение имени
    store.dispatch(getName()); // Загрузка имени
    console.log(store.getState()); // { name: 'Mike' }
 */

