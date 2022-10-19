function Profile({avatar, username, bio}) {
  return (
    <div className="profile text-center mt-4">
      <img className="rounded-circle header-profile-user" src={avatar} alt="Guillermo Santisteban Guerrero" />
      <h4 className="mt-3">@{username}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default Profile;
