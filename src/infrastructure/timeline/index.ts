import { type Plan } from "@/type";

export function encode(input: string): Plan[] {
  const output = JSON.parse(input);
  return output as Plan[];
}

export function decode(input: Plan[]): string {
  return JSON.stringify(input);
}
