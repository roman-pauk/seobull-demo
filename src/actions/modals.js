export const TOGGLE_ANALITIC_ACESS_MODAL = 'TOGGLE_ANALITIC_ACESS_MODAL'

export const toggleAnaliticAccessModal = ({ service, opened }) => ({
    type: TOGGLE_ANALITIC_ACESS_MODAL,
    payload: {
        service: opened ? service : null,
        opened
    }
})

export const TOGGLE_SITE_ACESS_MODAL = 'TOGGLE_SITE_ACESS_MODAL'

export const toggleSiteAccessModal = (bool) => ({
    type: TOGGLE_SITE_ACESS_MODAL,
    payload: bool
})

export const TOGGLE_EXAMPLES_MODAL = 'TOGGLE_EXAMPLES_MODAL'

export const toggleExamplesModal = (bool) => ({
    type: TOGGLE_EXAMPLES_MODAL,
    payload: bool
})

export const TOGGLE_DETAIL_MODAL = 'TOGGLE_DETAIL_MODAL'

export const toggleDetailModal = (isOpened, isExample, type) => ({
    type: TOGGLE_DETAIL_MODAL,
    payload: {
        isOpened,
        isExample,
        type
    }
})

export const TOGGLE_HELP_MODAL = 'TOGGLE_HELP_MODAL'

export const toggleHelpModal = isOpened => ({
    type: TOGGLE_HELP_MODAL,
    payload: {
        isOpened,
    }
})

export const TOGGLE_DEMO_MODAL = 'TOGGLE_DEMO_MODAL'

export const toggleDemoModal = isOpened => ({
    type: TOGGLE_DEMO_MODAL,
    payload: {
        isOpened,
    }
})

export const TOGGLE_CANSELBILL_MODAL = 'TOGGLE_CANSELBILL_MODAL'

export const toggleCanselBillModal = (isOpened = false, billId = null, billTime = null, billAmount = null) => ({
    type: TOGGLE_CANSELBILL_MODAL,
    payload: {
        isOpened,
        billId,
        billTime,
        billAmount,
    }
})

export const TOGGLE_QUERYES_MODAL = 'TOGGLE_QUERYES_MODAL'

export const toggleQueryesModal = (isOpened = false) => ({
    type: TOGGLE_QUERYES_MODAL,
    payload: {
        isOpened,
    }
})

export const TOGGLE_NEED_PLAN_MODAL = 'TOGGLE_NEED_PLAN_MODAL'

export const toggleNeedPlanModal = (isOpened = false) => ({
    type: TOGGLE_NEED_PLAN_MODAL,
    payload: {
        isOpened,
    }
})