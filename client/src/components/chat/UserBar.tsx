const UserBar = () => {
  return (
    <aside className="flex flex-col items-center pr-8 bg-black text-white h-screen p-4">
      <h1 className="font-bold text-3xl">Chat App</h1>
      <div className="mt-5 flex flex-col gap-4 items-center">
        <h2 className="font-bold text-xl flex flex-col">Active Users</h2>
        <div className="flex flex-col gap-2 font-semibold">
          <p>user 1</p>
          <p>user 2</p>
        </div>
      </div>
    </aside>
  );
};

export default UserBar;
