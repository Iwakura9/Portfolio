import { pt, type Dictionary } from "./pt";
import { en } from "./en";
import type { Lang } from "./types";

export const dictionaries: Record<Lang, Dictionary> = { pt, en };

export type { Dictionary };
