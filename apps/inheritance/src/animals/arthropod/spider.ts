import { Arthropod, ArthropodProps } from "../../entities/arthropod";

type SpiderProps = ArthropodProps & {
  strength: number;
  speed: number;
  species: "black widow" | "jumping" | "hobo";
};

export class Spider extends Arthropod {
  constructor(protected props: SpiderProps) {
    super(props);
  }

  public buildSilk() {
    return "building silk";
  }

  public layEggsInYourHouse() {
    console.log("moving to your house");
    this.move(349843, 43289);

    this.layEggs(this.props.x, this.props.y);
    return "layed 'em in yo house!";
  }

  public turnToSpiderMan() {
    this.eat({
      type: "fly",
    });

    console.log("biting man");
    this.move(349843, 43289);

    return "layed 'em in yo house!";
  }
}
