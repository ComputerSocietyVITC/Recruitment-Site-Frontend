import { writable } from 'svelte/store';

import type { User } from '../app.d.ts';

export const user = writable<User | null>(null);
export const changeDetails = writable<boolean>(false);
export const submitted = writable<boolean>(false);
