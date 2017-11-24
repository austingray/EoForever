const template = (state, component) => /* @html */`
<html>
  <head>
    <link rel="stylesheet" href="/build/css/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Passion+One|Spectral+SC" rel="stylesheet">
    <script>
      var __STATE__ = ${JSON.stringify(state)};
    </script>
  </head>

  <body>
    <div id="app">
      <div>${component}</div>
    </div>
    <script src="/build/js/bundle.js"></script>
  </body>
</html>
`;

export default template;
