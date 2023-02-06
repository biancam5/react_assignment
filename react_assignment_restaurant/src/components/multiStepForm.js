import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Dishes from '../data/dishes.json';

//I coudnt have enought time to complete the whole challenge, however I hope you can evaluate the 70% of challenge  I did

//I was going to do the validations with Formik
const MealForm = () => {
  const [step, setStep] = useState(1);
  const [mealCategory, setMealCategory] = useState("");
  const [servings, setServings] = useState(0);
  const [restaurant, setRestaurant] = useState("");
  const [food, setFood] = useState("");

  const handleMealCategory = (e) => {
    setMealCategory(e.target.value);
  };

  const handleServings = (e) => {
    setServings(e.target.value);
  };

  const handleRestaurant = (e) => {
    setRestaurant(e.target.value);
  };

  const handleFood = (e) => {
    setFood(e.target.value);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
       <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          {step === 1 && (
            <Form>
              <Form.Group controlId="mealCategory">
                <Form.Label>Select Meal Category</Form.Label>
                <Form.Control
                  as="select"
                  value={mealCategory}
                  onChange={handleMealCategory}
                >
                  <option value="">Select</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            </Form>
          )}
          {step === 2 && (
            <Form>
              <Form.Group controlId="servings">
                <Form.Label>Number of Servings</Form.Label>
                <Form.Control
                  type="number"
                  value={servings}
                  onChange={handleServings}
                />
              </Form.Group>
              <Button variant="secondary" onClick={handlePrevious}>
                Previous
              </Button>
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            </Form>
          )}
          {step === 3 && (
            <Form>
              <Form.Group controlId="restaurant">
                <Form.Label>Select Restaurant</Form.Label>
                <Form.Control
                  as="select"
                  value={restaurant}
                  onChange={handleRestaurant}
                >
                  <option value="">Select</option>
                  <option value="restaurant1">Restaurant 1</option>
                  <option value="restaurant2">Restaurant 2</option>
                  <option value="restaurant3">Restaurant 3</option>
                  </Form.Control>
          </Form.Group>
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        </Form>
      )}
      {step === 4 && (
        <Form>
          <Form.Group controlId="food">
            <Form.Label>Select Food</Form.Label>
            <Form.Control
              as="select"
              value={food}
              onChange={handleFood}
            >
              <option value="">Select</option>
              <option value="food1">Food 1</option>
              <option value="food2">Food 2</option>
              <option value="food3">Food 3</option>
            </Form.Control>
          </Form.Group>
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="primary">Submit</Button>
        </Form>
      )}
    </Col>
  </Row>
</Container>
);
};

export default MealForm;