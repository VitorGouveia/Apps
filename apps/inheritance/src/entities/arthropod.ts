import { Animal, AnimalProps } from "../lib/animal";

export type ArthropodProps = AnimalProps & {
  scaleColor: string;
};

export class Arthropod extends Animal {
  constructor(protected props: ArthropodProps) {
    super(props);
  }

  protected layEggs(x: number, y: number) {
    console.log("moving to the nearest wall corner");
    this.move(x, y);

    return "laying the egg";
  }
}
