const getStoredList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredList = id => {
    const storedList = getStoredList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

const getWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedList = JSON.parse(storedWishListStr);
        return storedList
    } else {
        return [];
    }
}

const addToWishList = id => {
    const storedWishList = getWishList();
    if (storedWishList.includes(id)){
        console.log(id, 'already exists in the wish list.')
    } else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr)
    }
}

export { addToStoredList, addToWishList }
