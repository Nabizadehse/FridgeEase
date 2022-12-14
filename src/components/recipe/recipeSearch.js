import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import loadingImg from "../../img/loading.png";
import Rating from "../../img/rating.png";
import Time from "../../img/time.png";
import User from "../../img/user.png";
const RecipeSearch = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState();
  useEffect(() => {
    if (id) {
      fetch(`/recipe/byname/?phrase=${id}`)
        .then((res) => res.json())
        .then((results) => {
          setSearchResult(results.Recipes);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }
  }, [id]);

  return (
    <section className="recipe-container">
      {isLoading && (
        <div className="loading-box">
          <img src={loadingImg} className="loading" />
          <h4>Loading...</h4>
        </div>
      )}
      {error && <h4>obs...</h4>}
      {!isLoading && (
        <>
          {!error && (
            <>
              {searchResult &&
                searchResult.map((item) => (
                  <Link
                    to={`/recipeDetails/${item.Id}`}
                    className="recipe-cart-small"
                    key={item.Id}
                  >
                    <img src={item.ImageUrl} className="recipe-img" alt="" />
                    <header>
                      <h4 className="cart-headline-bold">{item.Title}</h4>
                    </header>
                    <div className="recipe-cart-body">
                      <div className="rating-time-portions">
                        <span className="rating">
                          <img src={Rating} alt="rating icon" />
                          <pre>{item.AverageRating}</pre>
                        </span>
                        <span className="time">
                          <img src={Time} alt="timer icon" />
                          <pre>{item.CookingTimeAbbreviated}</pre>
                        </span>
                        <span className="portions">
                          <img src={User} alt="user icon" />
                          <pre>{item.Portions}</pre>
                        </span>
                      </div>
                      <p>{item.PreambleHTML}</p>
                    </div>
                  </Link>
                ))}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default RecipeSearch;
