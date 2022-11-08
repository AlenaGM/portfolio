export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "string",
    },
    {
      name: "demoLink",
      title: "Project Link",
      type: "url",
    },
    {
      name: "codeLink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "date",
      title: "Finished on",
      type: "datetime",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
