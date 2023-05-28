import { writable } from "svelte/store";
import { auth } from "./firebase";

export const user = writable(auth.currentUser)