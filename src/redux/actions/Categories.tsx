export const changeAquarium = (color:any) => ({
    type: 'AQUARIUM',
    color
});

export const changeCafe = () => ({
   type: 'CAFE',
});

// actions.js
export const activateGeod = (geod:any) => ({
    type: 'ACTIVATE_GEOD',
    geod,
});

export const closeGeod = () => ({
    type: 'CLOSE_GEOD',
});

export const changeGeod = (geod:any) => ({
    type: 'CHANGE_GEOD',
    geod
});



