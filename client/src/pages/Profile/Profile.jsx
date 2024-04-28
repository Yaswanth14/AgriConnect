import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/Auth";

const Profile = () => {
    const [auth, setAuth] = useAuth();

  return (
    <div>
        <h1>Profile</h1>
    </div>
  )
}

export default Profile