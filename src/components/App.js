import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { fetchArticles, createArticle } from "../services/articleService";
import "./App.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(null);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        Blog
        {user && (
          <button id="newArticle" onClick={() => setWriting(true)}>
            New Article
          </button>
        )}
        {!user ? <SignIn /> : <SignOut />}
      </header>
      {!user ? "" : <Nav articles={articles} setArticle={setArticle} />}
      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} />
      )}
    </div>
  );
}
