import { Tabs } from "antd";
import React from "react";
import PageTitle from "../../components/PageTitle";
import MoviesList from "./MoviesList";
import TheatersList from "./TheatersList";
//added a comment
//added a second comment
//added third comment
const Admin = () => {
  return (
    <div>
        <PageTitle title="Admin" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
          <MoviesList/>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
            <TheatersList/>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;
