"use client";

import { getAllPlants } from "@/api/plantApi";
import { useQuery } from "@tanstack/react-query";
import { plants } from "./types/plantType";

export default function Home() {

  const {data:plants, isError, error, isLoading} = useQuery<plants[]>({
    queryKey:["plants"],
    queryFn: getAllPlants
  });

  return (
    <div>
        {isError && <h4>plant 데이터 에러..., {error.message}</h4>}
        {isLoading && <h4>로딩 중...</h4>}
        {plants && 
          <ul>{plants.map((p)=>{
            return (<li key={p.id}>{p.name}</li>)
          })}</ul>
        }

    </div>
  );
}
