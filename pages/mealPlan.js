import React from "react";
import Bar from "../components/Bar";
import RadioButtonsGroup from "../components/RadioButtonsGroup";
import ImgMediaCard from "../components/ImgMediaCard";
import {
  Typography,
  Container,
  Grid,
  Chip,
  FormLabel,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { v4 as uuidv4 } from "uuid";

function mealPlan() {
  const cuisineTypes = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
  ];

  const dishTypes = [
    "Alcohol-cocktail",
    "Biscuits and cookies",
    "Bread",
    "Cereals",
    "Condiments and sauces",
    "Drinks",
    "Desserts",
    "Egg",
    "Main course",
    "Omelet",
    "Pancake",
    "Preps",
    "Preserve",
    "Salad",
    "Sandwiches",
    "Soup",
    "Starter",
  ];

  const healthLabels = [
    "alcohol-free",
    "immuno-supportive",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-fat-abs",
    "low-potassium",
    "low-sugar",
    "lupine-free",
    "Mediterranean",
    "mustard-free",
    "no-oil-added",
    "paleo",
    "peanut-free",
    "pescatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
  ];

  const dietLabels = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const mealPlan = ["burger"];

  return (
    <div>
      <Bar />

      <main>
        {mealPlan.length > 0 ? (
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h3"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Create my Meal Plan 🍴😋
              </Typography>
            </Container>
            <Container maxWidth="xl">
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={3}>
                  <RadioButtonsGroup
                    title="Cuisine Types"
                    labels={cuisineTypes}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <RadioButtonsGroup title="Dish Types" labels={dishTypes} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <RadioButtonsGroup title="Diet Labels" labels={dietLabels} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormLabel component="legend">Health Labels</FormLabel>
                  {healthLabels !== [] &&
                    healthLabels.map((healthLabel) => (
                      <Chip
                        key={uuidv4()}
                        label={healthLabel}
                        color="primary"
                        size="small"
                        deleteIcon={<DoneIcon />}
                        onDelete={handleDelete}
                        onClick={handleClick}
                      />
                    ))}
                </Grid>
              </Grid>
            </Container>
          </div>
        ) : (
          <ImgMediaCard />
        )}
      </main>
    </div>
  );
}

export default mealPlan;
