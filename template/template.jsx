const template = (state, styleTags, component) => /* @html */`
<html>
  <head>
    <link rel="stylesheet" href="/build/css/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Passion+One|Spectral+SC" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script>
      var __STATE__ = ${JSON.stringify(state)};
    </script>
    ${styleTags}
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
