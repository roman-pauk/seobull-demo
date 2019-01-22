import { TOGGLE_ANALITIC_ACESS_MODAL, TOGGLE_SITE_ACESS_MODAL, TOGGLE_EXAMPLES_MODAL, TOGGLE_DETAIL_MODAL,
     TOGGLE_HELP_MODAL, TOGGLE_DEMO_MODAL, TOGGLE_CANSELBILL_MODAL, TOGGLE_QUERYES_MODAL, TOGGLE_NEED_PLAN_MODAL } from '../actions/modals'

const initialState = {
    analysisAccess: {
        isOpened: false,
        service: null
    },
    siteAccess: {
        isOpened: false,
    },
    examples: {
        isOpened: false,
    },
    details: {
        isOpened: false,
        type: null,
        isExample: false,
    },
    helpModal: {
        isOpened: false,
    },
    demoModal: {
        isOpened: false,
    },
    canselBill: {
        isOpened: false,
        billId: null,
        billTime: null,
        billAmount: null,
    },
    queryes_modal: {
        isOpened: false,
    },
    need_select_palan: {
        isOpened: false,
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_ANALITIC_ACESS_MODAL:
        return {
            ...state,
            analysisAccess: {
                isOpened: action.payload.opened,
                service: action.payload.service
            }
        }
    case TOGGLE_SITE_ACESS_MODAL:
        return {
            ...state,
            siteAccess: {
                isOpened: action.payload
            }
        }
    case TOGGLE_EXAMPLES_MODAL:
        return {
            ...state,
            examples: {
                isOpened: action.payload
            }
        }
    case TOGGLE_DETAIL_MODAL:
        return {
            ...state,
            details: {
                ...state.details,
                ...action.payload
            }
        }
    case TOGGLE_HELP_MODAL: 
        return {
            ...state,
            helpModal: {
                isOpened: action.payload.isOpened
            }
        }
    case TOGGLE_DEMO_MODAL: 
        return {
            ...state,
            demoModal: {
                isOpened: action.payload.isOpened
            }
        }
    case TOGGLE_CANSELBILL_MODAL: 
        return {
            ...state,
            canselBill: action.payload
        }
    case TOGGLE_QUERYES_MODAL:
        return {
            ...state,
            queryes_modal: action.payload,
        }
    case TOGGLE_NEED_PLAN_MODAL:
        return {
            ...state,
            need_select_palan: action.payload,
        }
    default:
        return state
    }
}