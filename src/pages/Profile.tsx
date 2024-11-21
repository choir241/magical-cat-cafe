import { useState, useEffect } from "react";
import { getCatData, ICatData } from "../../api/getData";
import CatCard from "../../components/CatCard";

export default function Profile() {
  const [catData, setCatData] = useState<ICatData[]>();

  useEffect(() => {
    getCatData({ setCatData: (catData: ICatData[]) => setCatData(catData) });
  }, []);

  return (
    <div className="bg-[#383151] min-h-screen">
      {catData ? (
        <main>
          {/* Cat Cards */}
          {/* <section>
          {catData.map((cat: ICatData, i: number) => {
            return (
              <div key={`${cat.breed}-${i}`}>
                <CatCard catData={cat} />
              </div>
            );
          })}
          </section> */}
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
