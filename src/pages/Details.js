const Details = () => {
  const formValuesJson = { ...localStorage };
  console.log(formValuesJson);
  // const formValues = JSON.parse(formValuesJson);
  console.log("data saved");
  // console.log(Object.keys(formValuesJson));
  let issues = Object.values(formValuesJson);

  issues.forEach((issues) => console.log(issues));

  return <div></div>;
};

export default Details;
