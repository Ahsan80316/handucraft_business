import useUserData from "../../../Hook/useUserData";

const UserHome = () => {
  const [userData, isLoading, isError] = useUserData();
  console.log(userData);

  if (isLoading) {
    return (
      <div className="mt-8 text-center">
        <p>Loading user data...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-8 text-center">
        <p>Error loading user data.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-gray-100 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to the{" "}
          <span className="text-3xl text-green-500 font-semibold">
            {userData.name}
          </span>{" "}
          Dashboard
        </h1>
        <p className="text-gray-600">
          You are logged in as an Participant user.
        </p>
      </div>
    </div>
  );
};

export default UserHome;
