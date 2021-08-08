exports.handler = async (event, context) => {
  const path = event.path.replace(/\/\.netlify\/functions\/[^/]*\//, '')
  const pathParts = (path) ? path.split('/') : []

  const generateHtml = (name = 'there') => {
    /** For security *always* escape output html
        const safeValues = escapeHtml(name)
      */
    return `
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta property="og:title" content="Hi ${name}">
          <meta property="og:type" content="website">
          <meta property="og:url" content="https://fabiofranchino.com">
          <meta property="og:image" content="https://presenta-service-back.herokuapp.com/ppng/?_uid=OmNsFWePYW|VkF2rsiLp&text0[text]=${name}">
          <meta property="og:site_name" content="fabiofranchino.com">
          <meta property="og:description" content="Dyn Social Card Test">

          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:site" content="@fabiofranchino">
          <meta name="twitter:creator" content="@fabiofranchino">
          <meta name="twitter:url" content="https://fabiofranchino.com{{ site.baseurl }}{{ page.url }}">
          <meta name="twitter:title" content="Hi ${name}">
          <meta name="twitter:description" content="Dyn Social Card Test">
          <meta name="twitter:image:src" content="https://presenta-service-back.herokuapp.com/ppng/?_uid=OmNsFWePYW|VkF2rsiLp&text0[text]=${name}">
        </head>
        <body>
          <h1>Hi ${name}</h1>
          <p>Copy the URL and put it in a social network post</p>
        </body>
      </html>`
  }

  return {
    statusCode: 200,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html'
    },
    body: generateHtml(pathParts[0])
  }
}
