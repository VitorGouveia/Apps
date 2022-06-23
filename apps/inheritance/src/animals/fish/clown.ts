import { Fish, FishProps } from "../../entities/fish";

type ClownFishProps = FishProps & {
  speed: number;
  length: number; // in cm
  habitat: "costal" | "reefs";
};

export class ClownFish extends Fish {
  constructor(protected props: ClownFishProps) {
    super(props);
  }

  public findShadowInAquarium() {
    this.move(114936, 74378);

    return "found it!";
  }

  public swimAlone() {
    this.swim(114936, 74378, {
      depth: "shallow",
    });

    return "just keep swimming...";
  }

  public findNemo() {
    const RNG = Math.floor(Math.random() * 2);

    if (!!RNG) {
      return "found it";
    }

    return "couldn't find it";
  }
}
