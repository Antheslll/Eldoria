import { useMemo } from "react";

interface FilteredHeroType {
  background?: string;
  skill1?: string;
  skill2?: string;
  skill3?: string;
  name?: string;
  surname?: string;
  description?: string;
  characterPreview?: string;
  skill1preview?: string;
  skill2preview?: string;
  skill3preview?: string;
  weaponImg?: string;
  weaponsName?: string;
  level?: number;
  hp?: number;
  power?: number;
  st?: number;
  def?: number;
  skill1Icon?: string;
  skill2Icon?: string;
  skill3Icon?: string;
  skill1Description?: string;
  skill2Description?: string;
  skill3Description?: string;
  color?: string;
}

export function useCharacterData(
  filteredHero: FilteredHeroType | undefined,
  skillHover: string
) {
  const {
    heroBackground,
    skill1,
    skill2,
    skill3,
    skillName1,
    skillName2,
    skillName3,
    heroName,
    heroSurname,
    description,
    characterPreview,
    skill1Preview,
    skill2Preview,
    skill3Preview,
    weaponImg,
    weaponName,
    level,
    hp,
    power,
    st,
    def,
    skill1Icon,
    skill2Icon,
    skill3Icon,
    skill1Description,
    skill2Description,
    skill3Description,
    heroColor,
  } = useMemo(() => {
    return {
      heroBackground: filteredHero?.background,
      skill1: filteredHero?.skill1,
      skill2: filteredHero?.skill2,
      skill3: filteredHero?.skill3,
      skillName1: filteredHero?.skill1 ?? "UnknownSkill",
      skillName2: filteredHero?.skill2 ?? "UnknownSkill",
      skillName3: filteredHero?.skill3 ?? "UnknownSkill",
      heroName: filteredHero?.name,
      heroSurname: filteredHero?.surname,
      description: filteredHero?.description,
      characterPreview: filteredHero?.characterPreview,
      skill1Preview: filteredHero?.skill1preview,
      skill2Preview: filteredHero?.skill2preview,
      skill3Preview: filteredHero?.skill3preview,
      weaponImg: filteredHero?.weaponImg,
      weaponName: filteredHero?.weaponsName,
      level: filteredHero?.level ?? 0,
      hp: filteredHero?.hp ?? 0,
      power: filteredHero?.power ?? 0,
      st: filteredHero?.st ?? 0,
      def: filteredHero?.def ?? 0,
      skill1Icon: filteredHero?.skill1Icon,
      skill2Icon: filteredHero?.skill2Icon,
      skill3Icon: filteredHero?.skill3Icon,
      skill1Description: filteredHero?.skill1Description,
      skill2Description: filteredHero?.skill2Description,
      skill3Description: filteredHero?.skill3Description,
      heroColor: filteredHero?.color,
    };
  }, [filteredHero]);

  const previewImage = useMemo(() => {
    if (skillHover === "") return characterPreview;
    if (skillHover === skill1) return skill1Preview;
    if (skillHover === skill2) return skill2Preview;
    if (skillHover === skill3) return skill3Preview;
    return "";
  }, [
    skillHover,
    skill1,
    skill2,
    skill3,
    characterPreview,
    skill1Preview,
    skill2Preview,
    skill3Preview,
  ]);

  const showSkillDescription = useMemo(() => {
    if (skillHover === skill1) return skill1Description;
    if (skillHover === skill2) return skill2Description;
    if (skillHover === skill3) return skill3Description;
    return "";
  }, [
    skillHover,
    skill1,
    skill2,
    skill3,
    skill1Description,
    skill2Description,
    skill3Description,
  ]);

  const skillIconPreviewing = useMemo(() => {
    if (skillHover === skill1) return skill1Icon;
    if (skillHover === skill2) return skill2Icon;
    if (skillHover === skill3) return skill3Icon;
    return "";
  }, [skillHover, skill1, skill2, skill3, skill1Icon, skill2Icon, skill3Icon]);

  return {
    heroBackground,
    skill1,
    skill2,
    skill3,
    skillName1,
    skillName2,
    skillName3,
    heroName,
    heroSurname,
    description,
    characterPreview,
    skill1Preview,
    skill2Preview,
    skill3Preview,
    weaponImg,
    weaponName,
    level,
    hp,
    power,
    st,
    def,
    skill1Icon,
    skill2Icon,
    skill3Icon,
    skill1Description,
    skill2Description,
    skill3Description,
    previewImage,
    showSkillDescription,
    skillIconPreviewing,
    heroColor,
  };
}
