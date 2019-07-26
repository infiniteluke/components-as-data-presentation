

exports.handler = (event, context, cb) => {
  cb(null, { statusCode: 200, body: `<head>
  <script src="https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js"></script>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.css" />
  <script src="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.min.js"></script>
</head>
<body>
  <div id="voyager">Loading...</div>
  <script>
    function introspectionProvider(query) {
      return fetch(window.location.origin + '/graphql', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query: query}),
      }).then(response => response.json());
    }

    // Render <Voyager />
    GraphQLVoyager.init(document.getElementById('voyager'), {
      introspection: introspectionProvider
    })
  </script>
</body>
</html>`})
}