import { Animal, AnimalProps } from "../lib/animal";

export type ReptileProps = AnimalProps & {
  scaleColor: string;
};

export class Reptile extends Animal {
  constructor(protected props: ReptileProps) {
    super(props);
  }

  protected layEggs(x: number, y: number) {
    console.log("moving to the nearest beach");
    this.move(x, y);

    return "laying the egg";
  }
}
