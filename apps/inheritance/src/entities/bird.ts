import { Animal, AnimalProps } from "../lib/animal";

export type BirdProps = AnimalProps & {
  featherColor: string;
};

export class Bird extends Animal {
  constructor(protected props: BirdProps) {
    super(props);
  }

  protected layEggs(x: number, y: number) {
    console.log("moving to the nearest beach");
    this.move(x, y);

    return "laying the egg";
  }
}
