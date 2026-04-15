import Card from "@/components/card";
import CardContainer from "@/components/card-container";
import Header from "@/components/header";
import { boardSeed } from "../lib/board-seed";

export default function Home() {
  return (
    <main className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <Header workspace="Desenvolvimento" />

      <div className="flex min-h-0 flex-1 overflow-x-auto overflow-y-auto px-10 pb-6 mt-4">
        <div className="flex w-max items-start gap-4">
          {boardSeed.map((column) => (
            <CardContainer
              key={column.title}
              title={column.title}
              quantity={String(column.cards.length)}
              color={column.color}
            >
              {column.cards.map((card) => (
                <Card
                  key={`${column.title}-${card.title}`}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                />
              ))}
            </CardContainer>
          ))}
        </div>
      </div>
    </main>
  );
}
