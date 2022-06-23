import { Bird, BirdProps } from "../../entities/bird";

type PenguinProps = BirdProps & {
  primaryColor: "red" | "yellow";
  fly: boolean;
  height: number;
  age: number;
};

export class Penguin extends Bird {
  constructor(protected props: PenguinProps) {
    super(props);
  }

  get lifespan(): number {
    const age = Math.round(Math.random() * 20);

    return age >= 15 ? 15 : age;
  }

  public curse() {
    return "taca a mae pra ver se quica";
  }

  public slideInIce() {
    return this.move(this.props.x + 294, this.props.y + 483, this.props.y - 10);
  }
}
