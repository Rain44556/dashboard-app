
const Searchbar = ({search,setSearch}) => {

    return (
         <div className="flex gap-5 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-700"
        />
        <button
          onClick={() => setSearch("")}
          className="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Clear
        </button>
      </div>
    );
};

export default Searchbar;