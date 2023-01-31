import P from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import "./index.css";

const Post = ({ post, handleClick }) => {
  console.log("filho renderizou!");
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  //Criando o useRef
  const input = useRef(null);
  console.log("pai renderizou");

  useEffect(() => {
    setTimeout(() => {
      //carrega os posts
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 1000);
  }, []);

  //Quando o estado *value muda para da focus n input"
  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  //funcção para pegar o clique no titulo
  const handleClick = (value) => {
    setValue(value);
  };

  //o ref passa(inicia) a referência para o estado input
  return (
    <div className="App">
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        //O useMemo grava os posts na memoria, dessa forma impede que ele renderize se qualquer componente for alterado.
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
}

export default App;
