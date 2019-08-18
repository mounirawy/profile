function Layoutstyle({ children }) {
  return (
    <html
    style={{
      margin:0,
      marginLeft:0,
      padding:0,
      backgroundColor:'green',
      position:"fixed",
      top:0,
      left:0,
      right:0,
      bottom:0,
  }}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <body
      style={{
        position:"fixed",
        top:0,
        left:0,
        right:0,
        bottom:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

      }}
      >
        {children}
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        />

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        />

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        />

        <script>var Alert = ReactBootstrap.Alert;</script>
      </body>
    </html>
  );
}

export default Layoutstyle;
