"use client";

import { useEffect, useState } from "react";

import { BoardTypes } from "types/ContentDataStructure";

import BoardContent from "components/BoardsContent/Board/BoardContent";
import BoardHeader from "components/BoardsContent/Board/BoardHeader";
import Loader from "components/Loader";

export default function Board({ boardId }: { boardId: string }) {
  const [boardData, setBoardData] = useState<BoardTypes>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_HOSTNAME_URL}/v1/boards/${boardId}`)
      .then((res) => res.json())
      .then((data: BoardTypes) => {
        setBoardData(data);
      });
  }, [boardId]);

  return boardData ? (
    <>
      <div className="flex h-[54px] items-center justify-between bg-current-2 px-3 md:h-[64px] md:px-5">
        <BoardHeader boardData={boardData} />
      </div>
      <div className="relative my-2 h-full select-none">
        <BoardContent boardData={boardData} />
      </div>
    </>
  ) : (
    <Loader loadingText="⏳ Ładowanie tablicy..." />
  );
}
