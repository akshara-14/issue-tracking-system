import Card from "../components/Card";

const Details = () => {
  const formValuesJson = { ...localStorage };
  console.log(formValuesJson);
  // const formValues = JSON.parse(formValuesJson);
  console.log("data saved");
  // console.log(Object.keys(formValuesJson));
  let issues = Object.values(formValuesJson);

  issues.forEach((issue) => console.log(JSON.parse(issue).title));
  // console.log(issues.length);
  return (
    <div>
      <div>
        {issues.map((val) => (
          <div>
            <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
