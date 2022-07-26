import store from "store";

export type StoreState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
