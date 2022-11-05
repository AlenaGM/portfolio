export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tech Skill",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "string",
    },
    {
      name: "icon",
      title: "Skill Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
