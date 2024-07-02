import * as React from "react";

// our first react component created
function List(props) {
  return (
    <div>
      <ul>
        {props.list.map(function (item) {
          return <Item item={item} />;
        })}
      </ul>
    </div>
  );
}
const Item = (props) => {
  const item = props.item;
  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title} </a>
      </span>
      <span>{item.author} </span>
      <span>{item.num_comments} </span>
      <span>{item.points} </span>
    </li>
  );
};
function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");

  console.log("Rendering search with SearchTerm: ", searchTerm);
  const handleChange = (event) => {
    console.log("before: ", searchTerm);
    setSearchTerm(event.target.value);
    console.log("after: ", searchTerm);
  };

  return (
    <div>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div>
      <h1>My Hacker stories</h1>
      <Search />
      <hr />
      {/* calling the List component */}
      <List list={stories} />
    </div>
  );
}

export default App;
