import { Mammal, MammalProps } from "../../entities/mammal";

type CatProps = MammalProps & {
  breed: string;
  size: "small" | "huge";
  weight: "slim" | "fat";
};

export class Cat extends Mammal {
  constructor(protected props: CatProps) {
    super(props);
  }

  protected sleep() {
    return `sleeping ${Math.round(Math.random() * 12)} hours`;
  }

  protected avoidHumanHand() {
    this.move(49238, 732163);

    return "avoiding humans!";
  }

  protected giveBirth() {
    return `giving birth to ${Math.round(Math.random() * 10)} baby cats!!`;
  }

  protected playWithCardBoardBox() {
    return this.playWith("cardboard box");
  }
}
