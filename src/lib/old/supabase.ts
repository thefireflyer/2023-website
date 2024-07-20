import { createClient, type User } from '@supabase/supabase-js'
import { PUBLIC_PROJECT_URL, PUBLIC_ANON_API_KEY } from "$env/static/public";
import { writable, type Writable } from 'svelte/store';

export const supabase = createClient(PUBLIC_PROJECT_URL, PUBLIC_ANON_API_KEY)

export const user: Writable<User | null | "loading"> = writable(null)//"loading")

// supabase.auth.getUser().then(response => user.set(response.data.user))