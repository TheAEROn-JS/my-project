import React, { useEffect, useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Bar from "../components/Bar";
import RecipeReviewCard from "../components/RecipeReviewCard";
import { v4 as uuidv4 } from "uuid";
import { Container, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function recipe() {
  const classes = useStyles();

  const recipeID = process.env.NEXT_PUBLIC_RECIPE_APP_ID;
  const recipeKey = process.env.NEXT_PUBLIC_RECIPE_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${recipeID}&app_key=${recipeKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    //  Prevent Page Refresh
    e.preventDefault();
    setQuery(search);
    // Set back to original
    setSearch("");
  };

  return (
    <div>
      {/* Header */}
      <Bar />

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Food Recipe
            </Typography>
            <div>
              <form onSubmit={getSearch}>
                <Grid container spacing={2} justifyContent="center">
                  {/* Search Food */}

                  <Grid item>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search Food …"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                        value={search}
                        onChange={updateSearch}
                      />
                    </div>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary" type="submit">
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Check recipes array If not empty */}
            {recipes !== [] &&
              recipes.map((recipe) => (
                <Grid item key={uuidv4()} xs={12} sm={6} md={3}>
                  <RecipeReviewCard
                    title={recipe.recipe.label}
                    image={recipe.recipe.image}
                    calories={recipe.recipe.calories}
                    healthLabels={recipe.recipe.healthLabels}
                    ingredients={recipe.recipe.ingredientLines}
                    url={recipe.recipe.url}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default recipe;
