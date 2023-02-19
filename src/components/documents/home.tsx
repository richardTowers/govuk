import React from 'react'
import LayoutForPublic from '../layouts/for-public.js'
import loadTranslations from '../../zod/frontend/translations.js'
import homepageContentSchema from '../../zod/publishing-api/homepage-content-schema.js'

export default async function prepareHome () {
    const [translations, contentItem] = await Promise.all([
        loadTranslations(),
        fetch('https://www.gov.uk/api/content')
            .then(x => x.json())
            .then(x => homepageContentSchema.parse(x))
    ])
    const introTitleHtml = { __html: translations.en.homepage.index.intro_title.html }

    return function Home() {
        // TODO: title={contentItem.title} is actually wrong - the title comes from a translations file, not from the contentItem
        // ... in fact as far as I can determine, nothing at all on the homepage comes from the contentItem, so another demo would probably be better...
        return <LayoutForPublic title={contentItem.title}>
            <div className="govuk-width-container">
                <h1 className="homepage-inverse-header__title" dangerouslySetInnerHTML={introTitleHtml} />
                <p className="homepage-inverse-header__intro">The best place to find government services and&nbsp;information</p>
                <p className="homepage-inverse-header__intro homepage-inverse-header__intro--bold">Simpler, clearer, faster</p>
            </div>
        </LayoutForPublic>
    }
}