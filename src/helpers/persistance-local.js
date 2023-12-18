export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log('Error save user token');
    }
}

export const getItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log('Error get user token ');
    }
}

export const removeItem = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log('Error remove user token');
    }
}