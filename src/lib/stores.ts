import { writable } from 'svelte/store';

import type { User } from '../app.d.ts';

export const user = writable<User | null>(null);
