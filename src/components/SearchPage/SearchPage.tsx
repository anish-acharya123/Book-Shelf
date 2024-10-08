import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  console.log(searchQuery);

  return <div>SearchPage</div>;
};

export default SearchPage;
