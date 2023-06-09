// import React, { useEffect, useState } from "react";

// const IssuesData = () => {
//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     const savedFormData = localStorage.getItem("formData");
//     if (savedFormData) {
//       setFormData(JSON.parse(savedFormData));
//     }
//   }, []);

//   return (
//     <div>
//       {/* Display form data */}
//       {formData && (
//         <>
//           <p>Title: {formData.title}</p>
//           {/* type: "",
//     status: "",
//     priority: "",
//     resolution: "",
//     affectedversions: "",
//     fixversion: "",
//     components: "",
//     assignee: "",
//     labels: "",
//     reporter: "",
//     sprint: "",
//     description: "",
//     storypoints: "",
//     attachment: "", */}
//         </>
//       )}
//     </div>
//   );
// };

// export default IssuesData;
