import localforage from "localforage";

localforage.config({
  name: "box",
  version: 1.0,
  description: "General 3Box stroage",
});

export const setItem = (key, item) => localforage.setItem(key, item);

export const getItem = (key) => localforage.getItem(key);
