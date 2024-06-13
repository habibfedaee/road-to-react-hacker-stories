import * as React from "react";

function App() {
  function getTitle(title) {
    return title;
  }

  return (
    <div>
      <h1>Hello {getTitle("reactttt!")}</h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
