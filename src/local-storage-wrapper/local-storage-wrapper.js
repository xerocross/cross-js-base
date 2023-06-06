function isLocalStorageAvailable () {
    const test = "test";
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

export default {
    setItem : function (key, value) {
        const isCanUseLocal = isLocalStorageAvailable();
        if (isCanUseLocal) {
            localStorage.setItem(key, value);
        }
    },
    getItem : function (key) {
        const isCanUseLocal = isLocalStorageAvailable();
        if (isCanUseLocal) {
            return localStorage.getItem(key);
        }
    },
    removeItem : function (key) {
        const isCanUseLocal = isLocalStorageAvailable();
        if (isCanUseLocal) {
            return localStorage.removeItem(key);
        }
    }
};
