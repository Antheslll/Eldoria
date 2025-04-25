export interface Hero {
  name: string;
  surname: string;
  level: number;
  weaponsName: string;
  hp: number;
  st: number;
  power: number;
  def: number;
  skill1: string;
  skill2: string;
  skill3: string;
  description: string;
  color: string;
  cardImg: string;
  cardImgHover: string;
  cardTextImg: string;
  characterPreview: string;
  weaponImg: string;
  skill1Icon: string;
  skill2Icon: string;
  skill3Icon: string;
  skill1preview: string;
  skill2preview: string;
  skill3preview: string;
  background: string;
}

export type HeroData = Hero[];
