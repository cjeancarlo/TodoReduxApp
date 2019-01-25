import * as fromFilter from  './filter.actions';

const  estadoInicial: fromFilter.filters = 'todos';

export function FilterReducer(
                    state = estadoInicial,
                    action: fromFilter.Actions ): fromFilter.filters {

                        switch( action.type ) {
                                case fromFilter.SET_FILTERS:
                                    return action.validFilters;
                                default:
                                    return state;
                        }
                    }
