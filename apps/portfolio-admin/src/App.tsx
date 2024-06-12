import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { ContactInfoList } from "./contactInfo/ContactInfoList";
import { ContactInfoCreate } from "./contactInfo/ContactInfoCreate";
import { ContactInfoEdit } from "./contactInfo/ContactInfoEdit";
import { ContactInfoShow } from "./contactInfo/ContactInfoShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { SkillsList } from "./skills/SkillsList";
import { SkillsCreate } from "./skills/SkillsCreate";
import { SkillsEdit } from "./skills/SkillsEdit";
import { SkillsShow } from "./skills/SkillsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Portfolio"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="ContactInfo"
          list={ContactInfoList}
          edit={ContactInfoEdit}
          create={ContactInfoCreate}
          show={ContactInfoShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Skills"
          list={SkillsList}
          edit={SkillsEdit}
          create={SkillsCreate}
          show={SkillsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
