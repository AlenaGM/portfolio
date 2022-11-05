export default {
  name: "oneExperience",
  title: "Single Job",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Job Title",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "description",
      title: "Job Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
};
