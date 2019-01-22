import React from 'react'
import { connect } from 'react-redux'
import Page from './Page'
// import SiteAccessBlock from '../Dump/SiteAccessBlock/SiteAccessBlock'
// import AnaliticAcessBlock from '../Smart/AnalisisAccessBlock/AnalisisAccessBlock'
import SiteAccessModal from '../Smart/SiteAccessModal/SiteAccessModal'
import AccessModal from '../Smart/AccessModal/AccessModal'
import PersonalDataForm from '../Smart/PersonalDataForm/PersonalDataForm'
import ProjectDataForm from '../Smart/ProjectDataForm/ProjectDataForm'
import { logOut } from '../../actions/auth'

function AccountPage({ logOut }) {
    return (
        <Page>
            <div className="c-admin-content">
                <h1 className="admin-ttl">Мой аккаунт</h1>
                <div className="c-admin-account js-popup">
                    <div className="c-admin-account__wrap">
                        <div className="c-admin-account__content">
                            {/* <section className="c-admin-account__element">
                                <SiteAccessBlock />
                                <AnaliticAcessBlock />
                            </section> */}
                            <PersonalDataForm />
                            <ProjectDataForm />
                        </div>
                    </div>
                </div>
                <button onClick={logOut} style={{marginTop: 15}} className="link-with-icon fix_icon-right fix_color-green admin-start">
                    <span>Выход</span>
                </button>
            </div>
            <AccessModal />
            <SiteAccessModal />
        </Page>
    )
}

export default connect(null, { logOut })(AccountPage)
