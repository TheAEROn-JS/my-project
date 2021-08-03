import React, { useState } from "react";
import Link from "next/link";
import Bar from "../components/Bar";
import ImgMediaCard from "../components/ImgMediaCard";
import {
  Typography,
  Container,
  Grid,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
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

  const [selectedCuisine, setSelectedCuisine] = useState("American");
  const [selectedDish, setSelectedDish] = useState("Biscuits and cookies");
  const [selectedHealth, setSelectedHealth] = useState(["alcohol-free"]);
  const [selectedDiet, setSelectedDiet] = useState("balanced");

  //chip
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  //chip
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
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Cuisine Types</FormLabel>
                    <RadioGroup
                      aria-label="Cuisine Types"
                      name="Cuisine Types"
                      value={selectedCuisine}
                      onChange={(event) => {
                        setSelectedCuisine(event.target.value);
                      }}
                    >
                      {cuisineTypes.map((cuisineType) => (
                        <FormControlLabel
                          key={uuidv4()}
                          value={cuisineType}
                          control={
                            <Radio
                              onClick={() => setSelectedCuisine(cuisineType)}
                            />
                          }
                          label={cuisineType}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Dish Types</FormLabel>
                    <RadioGroup
                      aria-label="Dish Types"
                      name="Dish Types"
                      value={selectedDish}
                      onChange={(event) => {
                        setSelectedDish(event.target.value);
                      }}
                    >
                      {dishTypes.map((dishType) => (
                        <FormControlLabel
                          key={uuidv4()}
                          value={dishType}
                          control={
                            <Radio onClick={() => setSelectedDish(dishType)} />
                          }
                          label={dishType}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Diet Labels</FormLabel>
                    <RadioGroup
                      aria-label="Diet Labels"
                      name="Diet Labels"
                      value={selectedDiet}
                      onChange={(event) => {
                        setSelectedDiet(event.target.value);
                      }}
                    >
                      {dietLabels.map((dietLabel) => (
                        <FormControlLabel
                          key={uuidv4()}
                          value={dietLabel}
                          control={
                            <Radio onClick={() => setSelectedDiet(dietLabel)} />
                          }
                          label={dietLabel}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
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
                        // if it is not exist, then set it
                        onClick={() =>
                          !selectedHealth.includes(healthLabel) &&
                          setSelectedHealth([healthLabel, ...selectedHealth])
                        }
                      />
                    ))}
                </Grid>
              </Grid>
              <Link
                href={{
                  pathname: "/meal",
                  query: {
                    diet: selectedDiet,
                    health: selectedHealth,
                    cuisineType: selectedCuisine,
                    dishType: selectedDish,
                  },
                }}
              >
                <a>Create Meal Plan</a>
              </Link>
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
