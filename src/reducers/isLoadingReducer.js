import { types } from "../types/types";

const isLoading = true;

export const isLoadingReducer = (state = isLoading, action) => {
    switch (action?.type) {
        case types.openLoading:
            return state = true;
        case types.closeLoading:
            return state = false;
        default:
            return state;
    }
}