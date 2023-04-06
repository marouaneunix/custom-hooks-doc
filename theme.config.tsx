import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg viewBox="0 0 512 512" width="30" height="30">
        <circle cx="256" cy="256" r="36" fill="#61dafb"/>
        <path stroke="#61dafb" strokeWidth="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 600 }}>
        Custom Hooks Labs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/marouaneunix/custom-hooks',
  },
  docsRepositoryBase: 'https://github.com/marouaneunix/custom-hooks-doc',
  footer: {
    text: 'Custom hooks Documentation',
  },
}

export default config
