function whatToDoForLunch(hungry, availableTime) {
  console.log("hungry is", hungry);
  console.log("availableTime is", availableTime);
  whatToDoForLunch(true, 45);

  if (hungry && availableTime > 30) {
    console.log("You're hungry and have more than 30 minutes for lunch. You should try a new restaurant in the area!");
  } else if (hungry && availableTime <= 30) {
    console.log("You're hungry but only have 30 minutes or less for lunch. You should grab a quick bite to eat!");
  } else {
    console.log("You're not hungry right now. Keep working!");
  }
}