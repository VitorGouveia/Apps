import { Bird, BirdProps } from "../../entities/bird";

type HawkProps = BirdProps & {
  strength: number;
  speed: number;
  wings: "long" | "short";
  species: "red-tailed" | "sharp-shinned" | "cooper's" | "red-shouldred";
};

export class Hawk extends Bird {
  constructor(protected props: HawkProps) {
    super(props);
  }

  protected migrate(country: string) {
    const countryList: Record<string, { x: number; y: number }> = {
      USA: {
        x: 103424,
        y: 434953,
      },
      Brazil: {
        x: 423597,
        y: 946389,
      },
      China: {
        x: 423644,
        y: 439575,
      },
    };

    const coordinates: { x: number; y: number } = countryList[country] || {
      x: 10000,
      y: 50000,
    };

    return this.move(coordinates.x, coordinates.y);
  }

  protected dive() {
    const DIVE_HEIGHT = 500; // 500 mts
    this.move(this.props.x, this.props.y, this.props.y - DIVE_HEIGHT); // dive by
  }

  protected hunt(prey: string) {
    return `hunting ${prey} with ${this.props.strength}`;
  }
}
