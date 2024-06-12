import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SkillsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="proficiency" source="proficiency" />
      </SimpleForm>
    </Edit>
  );
};
