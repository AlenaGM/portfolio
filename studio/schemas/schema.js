import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import author from "./author";
import contact from "./contact";
import skills from "./skills";
import experiences from "./experiences";
import oneExperience from "./oneExperience";
import projects from "./projects";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    author,
    skills,
    experiences,
    oneExperience,
    contact,
    projects,
    blockContent,
  ]),
});
