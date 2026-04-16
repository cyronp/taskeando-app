import type { SeedCard, SeedColumn } from "@/lib/board-seed";

export type CreateCardInput = {
    idColumn: string | number;
    title: string;
    description: string;
    date: string;
};

function generateNumericId() {
    return Date.now();
}

export function formatCardDate(date: string) {
    if (!date) {
        return "";
    }

    const [year, month, day] = date.split("-");

    if (!year || !month || !day) {
        return date;
    }

    return `${day}/${month}/${year}`;
}

export function createCard(columns: SeedColumn[], input: CreateCardInput) {
    const nextCard: SeedCard = {
        id: generateNumericId(),
        idColumn: input.idColumn,
        title: input.title,
        description: input.description,
        date: formatCardDate(input.date),
    };

    return columns.map((column) => {
        if (String(column.id) !== String(input.idColumn)) {
            return column;
        }

        return {
            ...column,
            cards: [...column.cards, nextCard],
        };
    });
}
