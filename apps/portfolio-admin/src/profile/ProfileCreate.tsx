import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="about" multiline source="about" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Create>
  );
};
