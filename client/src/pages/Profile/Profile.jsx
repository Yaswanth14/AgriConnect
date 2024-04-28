import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/Auth";

const Profile = () => {
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const getPosts = async () => {
          try {
            const {data} = await axios.get(
              `${import.meta.env.VITE_API}/posts/userposts`
            );
            console.log(data.data);
          } catch (error) {
            console.log(error);
          }
        };
        getPosts();
      }, []);

  return (
    <Layout>
        <h1>Profile</h1>
        <p>Name: {auth.user.name} email: {auth.user.email} username: {auth.user.username}</p>
    </Layout>
  )
}

export default Profile