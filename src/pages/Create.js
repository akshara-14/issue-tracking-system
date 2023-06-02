import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import { type } from "@testing-library/user-event/dist/type";

const initialValues = {
  title: "",
  type: "",
  status: "",
  priority: "",
  resolution: "",
  affectedversions: "",
  fixversion: "",
  components: "",
  assignee: "",
  labels: "",
  reporter: "",
  sprint: "",
  description: "",
  storypoints: "",
  attachment: "",
};

const Create = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="300px" left="233px" marginTop="150px">
      <Header title="Create" />

      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
        {({
          values,
          // errors,
          // touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              // paddingRight="300px"
              // paddingLeft="300px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "&>div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                sx={{ gridColumn: "span 4" }}
                // paddingRight="300px"
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Priority"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.priority}
                name="priority"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Resolution"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.resolution}
                name="resolution"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Affected Version/s"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.affectedversions}
                name="affectedversions"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fix-Version"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fixversion}
                name="fixversion"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Component/s"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.components}
                name="components"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Assignee"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.assignee}
                name="assignee"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Labels"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.labels}
                name="labels"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Reporter"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.reporter}
                name="reporter"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sprint"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sprint}
                name="sprint"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Story Points"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.storypoints}
                name="storypoints"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Attachment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.attachment}
                name="attachment"
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Create;
