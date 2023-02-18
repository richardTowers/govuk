import React from 'react'
import LayoutForPublic from '../layouts/for-public.js'
import loadTranslations from '../../zod/frontend/translations.js'

export default async function prepareHome () {
    const translations = await loadTranslations()
    const introTitleHtml = { __html: translations.en.homepage.index.intro_title.html }

    return function Home() {
        return <LayoutForPublic title="Welcome to GOV.UK">
            <div className="govuk-width-container">
                <h1 className="homepage-inverse-header__title" dangerouslySetInnerHTML={introTitleHtml} />
                <p className="homepage-inverse-header__intro">The best place to find government services and&nbsp;information</p>
                <p className="homepage-inverse-header__intro homepage-inverse-header__intro--bold">Simpler, clearer, faster</p>
            </div>
        </LayoutForPublic>
    }
}