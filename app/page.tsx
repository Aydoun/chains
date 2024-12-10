import AddCollection from "./ui/components/AddCollection";
import MediaCard from "./ui/components/MediaCard";
import { useGetCollectionsQuery } from "./services/collectionApi";

export default function Page() {
  const { data: collections, error, isLoading } = useGetCollectionsQuery();

  return (
    <>
      <AddCollection />
      <MediaCard />
    </>
  );
}
