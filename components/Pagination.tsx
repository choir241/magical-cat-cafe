import { Button } from "../components/ui/button";

export default function Pagination({
  list,
  itemsPerPage,
  setCurrentPage,
}: {
  list: any[];
  itemsPerPage: number;
  setCurrentPage: (e: number) => void;
}) {
  return (
    <div className="mb-10 w-1/5 flex justify-evenly">
      {Array.from({ length: Math.ceil(list.length / itemsPerPage) }, (_, i) => (
        <Button key={`button-${i}`} onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </Button>
      ))}
    </div>
  );
}
