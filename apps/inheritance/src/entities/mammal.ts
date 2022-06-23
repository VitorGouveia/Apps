import { Animal, AnimalProps } from "../lib/animal";

export type MammalProps = AnimalProps & {
  furColor: string;
};

export class Mammal extends Animal {
  constructor(protected props: MammalProps) {
    super(props);
  }

  protected playWith(object: string) {
    return `playing with ${object}`;
  }
}
