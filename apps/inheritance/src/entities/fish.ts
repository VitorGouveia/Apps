import { Animal, AnimalProps } from "../lib/animal";

type Depth = "shallow" | "deep";

export type FishProps = AnimalProps & {
  scaleColor: string;
};

export class Fish extends Animal {
  constructor(protected props: FishProps) {
    super(props);
  }

  protected swim(x: number, y: number, { depth }: { depth: Depth }) {
    const depthCases: Record<Depth, number> = {
      deep: 5400, // 5.4km
      shallow: 340, // 340mts
    };

    return this.move(x, y, depthCases[depth]);
  }
}
