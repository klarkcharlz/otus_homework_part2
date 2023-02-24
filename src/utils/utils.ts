import Cookies from 'universal-cookie';


function getUserSettingFromStorage() {
    const cookies = new Cookies();
    return {
        storageName: cookies.get('name'),
        storageCells: Number(cookies.get('cells')),
    };
}

function setUserSettingToStorage(name: string, cells: number) {
    const cookies = new Cookies();
    cookies.set('name', name);
    cookies.set('cells', cells);
}

export {getUserSettingFromStorage, setUserSettingToStorage};
