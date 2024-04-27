import React from "react";
import Layout from "../../components/Layout/Layout";
import NewPost from "./NewPost";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <Layout>
      <div className="p-5 flex">
        <div className="bg-[#7ED957] p-5 rounded-md flex flex-1">
          <NewPost />
        </div>
        <Sidebar />
      </div>
    </Layout>
  );
}

export default Home;
