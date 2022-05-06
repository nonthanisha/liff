import React from 'react'
import { useState, useEffect } from "react"
import Head from "next/head"
// import './myprofile.module.scss'


const MyProfile = ({ liff }) => {
  console.log(liff)
  const [userProfile , setUserProfile] = useState(null);
  const [displayName , setDisplayName] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);
  const [pictureUrl , setPictureUrl] = useState(null);

  useEffect(() => {
    import("@liff/get-profile").then((liff) => {
    console.log("LIFF profile...");
      liff
        .getProfile()
        .then((profile) => {
          const userProfile = profile.userId;
          setUserProfile(userProfile);
          const displayName = profile.displayName;
          setDisplayName(displayName);
          const statusMessage = profile.statusMessage;
          setStatusMessage(statusMessage);
          const pictureUrl = profile.pictureUrl;
          setPictureUrl(pictureUrl);
        })
        .catch((err) => {
          console.log("error", err);
        });
    });
  });
  return (
    <>
      <Head>My Profile</Head>
      <div className='container-fluid'>
        <div className='row'>
          <h1 className='bg-success text-center text-light col-12'>Profile</h1>
        </div>
        <div className='text-center'><img className='rounded-pill border' src={pictureUrl} /></div>
        <div>UserId: {userProfile}</div>
        <div>Name: {displayName}</div>
        <div>Status: {statusMessage}</div>
        <button className='btn btn-danger'>Log Out</button>
      </div>
    </>
  )
}

export default MyProfile