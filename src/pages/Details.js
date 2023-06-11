import Card from "../components/Card";

const Details = () => {
  const formValuesJson = { ...localStorage };
  // console.log(formValuesJson);
  // const formValues = JSON.parse(formValuesJson);
  console.log("data saved");
  // console.log(Object.keys(formValuesJson));
  let issues = Object.values(formValuesJson);

  // issues.forEach((issue) => console.log(JSON.parse(issue).title));
  // console.log(issues.length);
  var toDoArr = [];
  var inProgArr = [];
  var doneArr = [];
  issues.map((val) => {
    if (JSON.parse(val).status === "In Progress") {
      inProgArr.push(
        <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />
      );
    } else if (JSON.parse(val).status === "Done") {
      doneArr.push(
        <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />
      );
    } else {
      toDoArr.push(
        <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />
      );
    }
  });
  // console.log(toDoArr);
  // console.log(inProgArr);
  // console.log(doneArr);
  return (
    <div>
      {/* <Card {...toDoArr} />
      <Card {...inProgArr} />
      <Card {...doneArr} /> */}
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
