import { Reptile, ReptileProps } from "../../entities/reptile";

type TortoiseProps = ReptileProps & {
  strength: number;
  type: "amphibian" | "ground";
  speed: "slow" | "fast";
  sleep: "nocturnal" | "daytime";
};

export class Tortoise extends Reptile {
  constructor(protected props: TortoiseProps) {
    super(props);
  }

  public howMuchIsItGoingToLive() {
    const MAX_AGE = 200;
    const age = Math.round(Math.random() * MAX_AGE);

    return age < 30 ? 30 : age;
  }

  public swim() {
    const beach = {
      x: 1043532,
      y: 4235230,
    };

    return this.move(beach.x, beach.y);
  }

  public turnToPokemon() {
    return "turned into blastoise!";
  }
}
