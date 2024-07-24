import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/lib/features/todos/todosSlice";

// Save store to localStorage
function saveToLocalStorage(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
}

// Load store from localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
}
const rootReducer = combineReducers({
  todos: todoReducer,
});

const persistedState = loadFromLocalStorage();
export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
  });
  store.subscribe(() => saveToLocalStorage(store.getState()));
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
