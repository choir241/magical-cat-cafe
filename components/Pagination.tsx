import { Button } from "../components/ui/button";

export default function Pagination({
  list,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  lastIndex,
}: {
  list: any[];
  itemsPerPage: number;
  setCurrentPage: (e: number) => void;
  currentPage: number;
  lastIndex: number;
}) {
  return (
    <div>
      {Math.ceil(list.length / itemsPerPage) < currentPage + 1
        ? Array.from(
            { length: Math.ceil(list.length / itemsPerPage) },
            (_, i) => (
              <Button
                key={`button-${i}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            )
          )
        }
    </div>
  );
}
