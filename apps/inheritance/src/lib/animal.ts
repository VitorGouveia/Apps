export type Food = {
  type: string;
};

export type AnimalProps = {
  name: string;
  species: string;
  gender: string;
  habitat: string;
  foods: Food[];

  x: number;
  y: number;
  z?: number;
};

export class Animal {
  constructor(protected props: AnimalProps) {}

  protected move(x: number, y: number, z?: number) {
    this.props.x = x;
    this.props.y = y;
    this.props.z = z;
  }

  protected eat(food: Food): boolean {
    return this.props.foods.includes(food);
  }
}
