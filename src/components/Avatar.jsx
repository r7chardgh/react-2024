import React from "react";

const Avatar = ({ user }) => {
  React.useEffect(() => {
    console.log(user)
  
  }, [])
  
  return (
    <>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <img
            src={user.imageUrl}
            alt={`Photo of ${user.name}`}
            className="avatar"
            style={{ width: user.imageSize, height: user.imageSize }}
          />
        </>
      ) : null}
    </>
  );
};

export default Avatar;
