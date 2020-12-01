import React from "react";
import { Layout } from "../../components/Layout";
import { ListOfExperiences } from "../../components/ListOfExperiences";
import { MinProfile } from "../../components/MinProfile";
import { DetailedProfile } from "../../components/DetailedProfile";

export const Experiences = () => {
  return (
    <Layout>
      <DetailedProfile />
      <MinProfile />
      <ListOfExperiences />
    </Layout>
  );
};
