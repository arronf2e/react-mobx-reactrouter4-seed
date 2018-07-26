import createHashHistory from 'history/createHashHistory';
export const history = createHashHistory();

// 常量
const LOCATION_CHANGE = 'LOCATION_CHANGE';

// action creator
function locationChange (location = {}) {
    return {
        type    : LOCATION_CHANGE,
        payload : location
    };
}

// 路由变化监听函数
export const updateLocation = ({ dispatch }) => {
    return (location, action) => dispatch(locationChange({ ...location, action }));
};

const { location, action } = history;
const initialState = { ...location, action };
export function locationReducer (state = initialState, action) {
    return action.type === LOCATION_CHANGE
        ? action.payload
        : state;
}
