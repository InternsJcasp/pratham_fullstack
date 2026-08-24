function UserProfile() {
  const user = {
    name: "John Doe",
    role: "Developer",
    isOnline: true,
    avatarUrl: "https://via.placeholder.com/50",
  };

  const handleClick = () => {
    alert(`Viewing ${user.name}'s Profile`);
  };
  return (
    // Rule 1: Wrapped in Fragment (<>) to return a single root
    <>
      <div
        className="card"
        style={{ border: "1px solid #ccc", padding: "16px" }}
      >
        {/* Rule 2: Self-closing tag */}
        <img src={user.avatarUrl} alt={user.name} />

        {/* Rule 3: Embedding JavaScript variables */}
        <h2>{user.name}</h2>
        <p>Role: {user.role}</p>

        {/* Rule 4: Conditional expression */}
        <p>Status: {user.isOnline ? "🟢 Online" : "🔴 Offline"}</p>

        {/* Rule 5: Event Handler in camelCase */}
        <button onClick={handleClick}>View Profile</button>
      </div>
    </>
  );
}

export default UserProfile;
