import React from 'react'
import LayoutForPublic from '../layouts/for-public.js'

export default function Home() {
    return <LayoutForPublic title="Welcome to GOV.UK">
        <div className="govuk-width-container">
            <h1 className="homepage-inverse-header__title">
            Welcome to&nbsp;GOV.UK
            </h1>
            <p className="homepage-inverse-header__intro">The best place to find government services and&nbsp;information</p>
            <p className="homepage-inverse-header__intro homepage-inverse-header__intro--bold">Simpler, clearer, faster</p>
        </div>
    </LayoutForPublic>
}