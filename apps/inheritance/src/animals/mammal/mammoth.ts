import { Mammal, MammalProps } from "../../entities/mammal";

type MammothProps = MammalProps & {
  weather: string;
  hornSize: number;
  furColor: "brown" | "white";
  furThickness: number; // in cm
  location: "North America" | "Eurasia";
};

export class Mammoth extends Mammal {
  constructor(protected props: MammothProps) {
    super(props);
  }

  public surviveIceAge() {
    this.move(143204238, 4302479204);

    return "surviving ice age";
  }

  public makeFurThicker() {
    const FUR_THICKNESS_INCREASE = Math.round(this.props.furThickness / 3);
    this.props.furThickness += FUR_THICKNESS_INCREASE;

    return `made fur thicker by ${FUR_THICKNESS_INCREASE}cm`;
  }
}
