const Details = () => {
  const formValuesJson = { ...localStorage };
  console.log(formValuesJson);
  // const formValues = JSON.parse(formValuesJson);
  console.log("data saved");
  // console.log(Object.keys(formValuesJson));
  let issues = Object.values(formValuesJson);

  issues.forEach((issues) => console.log(issues));
  console.log(issues.length);
  return (
    <div>
      {issues.map((values) => (
        <div>{values}</div>
      ))}
    </div>
  );
};

export default Details;
