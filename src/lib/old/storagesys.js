import { readable, writable, get } from 'svelte/store';

export const NO_VALUE = Math.random()

export const KeyValuePair =
/**
 * @param {String} database an existing database to edit.
 * @param {String} key key of an existing or new key value pair.
 * @param {any} [updatedValue=NO_VALUE] new data value (optional), defaults to no update. Value of null will delete the key value pair.
 * @returns {(Promise)} if there was an error, {@link keyValuePair} will return the error code.
 *  If successful it will return the original data.
 */
(database, key, updatedValue = NO_VALUE) =>
    // @ts-ignore
    new Promise((resolve, reject) => {

        // @ts-ignore
        const transaction = get(db).transaction(database, "readwrite");

        const objectStore = transaction.objectStore(database);

        const request = objectStore.get(key);

        request.onsuccess = (/** @type {{ target: { result: any; }; }} */ event) => {
            const data = event.target.result;
            if (updatedValue !== NO_VALUE) {//should update existing data
                if (updatedValue == null) {//data is null, delete the key value pair
                    objectStore.delete(key)
                }
                else {//new data, update it
                    objectStore.put({
                        info: key,
                        data: updatedValue
                    })
                }
            }

            resolve(data)
        };
    })

export const CreateDatabase =
/**
 *
 * @param {String} databaseName
 * @param {String} primaryKey
 * @returns {IDBDatabase}
 */
// @ts-ignore
(databaseName, primaryKey) => new Promise((resolve, _reject) => {
    // @ts-ignore
    resolve(get(db).createObjectStore(databaseName, { keyPath: primaryKey }));
})

export const RemoveDatabase=
/**
 *
 * @param {String} databaseName
 * @returns {IDBDatabase}
 */
// @ts-ignore
(databaseName) => new Promise((resolve, _reject) => {
    // @ts-ignore
    resolve(get(db).deleteObjectStore(databaseName));
})

export const GetAll=
/**
 *
 * @param {String} database
 * @returns
 */
// @ts-ignore
(database) => new Promise((resolve, reject) => {
    // @ts-ignore
    const transaction = get(db).transaction(database, "readwrite");

    const objectStore = transaction.objectStore(database)
    let all = objectStore.getAll()
    all.onsuccess = (/** @type {{ target: { result: any; }; }} */ event) => {
        const data = event.target.result;
        // console.log(data)
        resolve(data)
    }
})

export const SetupStorage = () => {

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
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

    let request = window.indexedDB.open("testing06", 1);
    // @ts-ignore
    request.onerror = (/** @type {{ target: { errorCode: any; }; }} */ event) => {
        alert.set({
            type: "error",
            title: "Trouble opening database",
            text: event.target.errorCode
        })
    };
    // @ts-ignore
    request.onsuccess = (/** @type {{ target: { result: any; }; }} */ event) => {
        db.set(event.target.result);

        // @ts-ignore
        get(db).onerror = (/** @type {{ target: { errorCode: any; }; }} */ event) => {
            alert.set({
                type: "error",
                title: "Database error",
                text: event.target.errorCode
            })
        }

        KeyValuePair(
            "userdata", "username").then((/** @type {any} */ res) => {
                loading.set(false)
            })


    };

    // @ts-ignore
    request.onupgradeneeded = (/** @type {{ target: { result: any; }; }} */ event) => {


        db.set(event.target.result);
        CreateDatabase("userdata", "info");

        alert.set({
            type: "info",
            title: "Update",
            text: "update complete"
        })
    }

}

export const db = writable(null)

export const loading = writable(true)

//TODO: add data cache

export const alert = writable({
    type: "info",
    title: "Starting",
    text: "loading app"
})

//TODO: add alerts
