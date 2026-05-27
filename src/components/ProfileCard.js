import React, { useState } from "react";

function ProfileCard(props) {

  const [likes, setLikes] = useState(0);

  return (
    <div className="card">

      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="profile"
      />

      <h2>{props.name}</h2>

      <h4>{props.role}</h4>

      <p>{props.skill}</p>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Likes {likes}
      </button>

    </div>
  );
}

export default ProfileCard;