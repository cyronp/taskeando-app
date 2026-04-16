"use client";

import Card from "@/components/card";
import CardContainer from "@/components/card-container";
import Header from "@/components/header";
import CardModal from "@/components/card-modal";
import { useState } from "react";
import ColumnModal from "@/components/column-modal";
import { createCard, type CreateCardInput } from "./utils/create-card";
import {
  createCategory,
  type CreateCategoryInput,
} from "./utils/create-column";
import type { SeedColumn } from "@/lib/board-seed";

export default function Home() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isColumnModalActive, setIsColumnModalActive] = useState(false);
  const [board, setBoard] = useState<SeedColumn[]>([]);

  const handleCreateCard = (input: CreateCardInput) => {
    setBoard((currentBoard) => {
      return createCard(currentBoard, input);
    });
  };

  const handleCreateCategory = (input: CreateCategoryInput) => {
    setBoard((currentBoard) => {
      return createCategory(currentBoard, input);
    });
  };

  const handleDeleteCard = (cardId: string | number) => {
    setBoard((currentBoard) =>
      currentBoard.map((column) => ({
        ...column,
        cards: column.cards.filter((card) => card.id !== cardId),
      })),
    );
  };

  return (
    <main className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <Header
        workspace="Desenvolvimento"
        onCreateTask={() => {
          setIsModalActive(true);
          setIsColumnModalActive(false);
        }}
        onCreateColumn={() => {
          setIsModalActive(false);
          setIsColumnModalActive(true);
        }}
      />

      <div className="flex min-h-0 flex-1 overflow-x-auto overflow-y-auto px-10 pb-6 mt-4">
        <div className="flex w-max items-start gap-4">
          {board.map((column) => (
            <CardContainer
              key={column.title}
              title={column.title}
              quantity={String(column.cards.length)}
              color={column.color}
            >
              {column.cards.map((card) => (
                <Card
                  key={`${column.id}-${card.id}`}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                  removeCard={handleDeleteCard}
                />
              ))}
            </CardContainer>
          ))}
        </div>
      </div>
      {isModalActive && (
        <CardModal
          closeModal={() => setIsModalActive(false)}
          columns={board}
          onCreateCard={(input) => {
            handleCreateCard(input);
            setIsModalActive(false);
          }}
        />
      )}
      {isColumnModalActive && (
        <ColumnModal
          closeColumnModal={() => setIsColumnModalActive(false)}
          onCreateCategory={(input) => {
            handleCreateCategory(input);
            setIsColumnModalActive(false);
          }}
        />
      )}
    </main>
  );
}
