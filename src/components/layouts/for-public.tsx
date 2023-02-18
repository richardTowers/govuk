import React from 'react'

export default function LayoutForPublic(props?: React.PropsWithChildren<{title: string}>) {
  return (
    <html lang="en" className="govuk-template">
      <head>
        <meta charSet="utf-8"/>
        <title>{props.title}</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}