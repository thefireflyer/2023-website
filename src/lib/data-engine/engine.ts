///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

import { setContext } from 'svelte'
import { writable } from 'svelte/store'

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

export const engine = writable()

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

const LOCAL_DB_NAME = "local-engine"
const LOCAL_DB_VERSION = 1

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

export class Engine {
    memory: AppData
    local: IDBDatabase | IDBRequest | "Unavailable" | { "Error": string }

    constructor() {
        this.memory = new AppData;
        
        if (!window.indexedDB) {
            this.local = "Unavailable"
        } else {
            this.local = window.indexedDB.open(LOCAL_DB_NAME, LOCAL_DB_VERSION)
            this.local.onerror = event => {
                this.local = "Unavailable"
            }
            this.local.onsuccess = event => {
                this.local = event.target?.result as IDBDatabase
                this.sync()
            }
        }

    }

    public async sync() {
        
    }

}

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

class AppData {
    name: string

    homeportal: {
        bg: string
        _24time: boolean
    }

    schedule: {
        events: Array<
            {
                name: string
                desc: string
                start: DateTime
                end: DateTime
            }
        >
    }

    notes: {
        pages: Array<Page>
    }

    constructor () {
        this.name = ""

        this.homeportal = {
            bg: "https://pbs.twimg.com/media/FNgM9LJXMAYiE_4?format=jpg&name=large",
            _24time: false,
        }

        this.schedule = {
            events: []
        }

        this.notes = {
            pages: []
        }

    }
}

///////////////////////////////////////////////////////////////////////////////

class Page {
    id!: number
    title!: string
    properties!: [string]
    outgoing!: [Page]
    incoming!: [Page]
    contents!: [Block]
}

///////////////////////////////////////////////////////////////////////////////

class Block {
    id!: number
    type!: "text" | "datetime" | "todo" | "doing" | "done" | "query" | "link"
    text!: string
    children!: [Block]
}

///////////////////////////////////////////////////////////////////////////////

class DateTime {

}

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

/**
 * Initializes all database connections.
 * 
 * Inputs: N/A
 * 
 * Outputs: N/A
 * 
 * Side-effects:
 * - Changes `engine`
 * - Network requests
 * - Indexed DB mutation
 * 
 */
export function init() {
    return {
        "memory": InMemoryDB(),
        "local": LocalDB(),
    }
    
}

///////////////////////////////////////////////////////////////////////////////

function InMemoryDB() {


}

///////////////////////////////////////////////////////////////////////////////

function LocalDB() {

    if (!window.indexedDB) {
        return { 
            state:"error", 
            "message": "Your browser doesn't support a stable version of IndexedDB." 
        }
    }   
    
    
    if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().then((persistent) => {
            if (persistent) {
                console.log("Storage will not be cleared except by explicit user action");
            } else {
                console.log("Storage may be cleared by the UA under storage pressure.");
            }
        });
    }

    let request = window.indexedDB.open(LOCAL_DB_NAME, LOCAL_DB_VERSION)


}

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////

type Result<T> = 
    | { state: "ok", value: T }
    | { state: "error", message: String }

//---------------------------------------------------------------------------//

function map<T>(monad: Result<T>, operator: (arg: T) => Result<T>) {
    switch (monad.state) {
        case "ok": return operator(monad.value)
        case "error": return monad
    }
}

//---------------------------------------------------------------------------//

function chain<T>(state: Result<T>, operators: [(arg: T) => Result<T>]) {
    for(let i = 0; i < operators.length; i++) {
        state = map(state, operators[i])        
    }
    return state
}

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
///////////////////////////////////////////////////////////////////////////////