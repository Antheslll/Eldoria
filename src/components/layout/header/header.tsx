import HeaderComponent from "./header-component";

interface HeaderProps {
  page: string;
}

const Header = ({ page }: HeaderProps) => {
  if (page === "/") {
    return (
      <header>
        <HeaderComponent
          header="Enter the Realm of Eldoria"
          subheader='"Di antara langit berbintang dan tanah yang retak oleh perang, Eldoria berdiri sebagai dunia di mana legenda terlahir, dan takdir ditentukan oleh keberanian dan sihir purba."'
          navName1="Realm of Eldoria"
          navName2="The Living Lore"
          navName3="Arcane Chronicles"
          anchor1="/worldpage"
          anchor2="/characterpage"
          anchor3="/storypage"
          navKey1="world"
          navKey2="character"
          navKey3="story"
          backgroundImage={`/assets/home-page-assets/hero-section-assets/background-image.png`}
        />
      </header>
    );
  } else if (page === "/worldpage") {
    return (
      <header>
        <HeaderComponent
          header="Step Into the Light and Void"
          subheader='"Step into the chronicles of Valdenar, Sylvara, Dravakhor, and Nirvalis—realms bound by fate, magic, and celestial will, each holding secrets for those who dare to look beyond the veil."'
          navName1="Return to Base"
          navName2="The Living Lore"
          navName3="Arcane Chronicles"
          anchor1="/"
          anchor2="/characterpage"
          anchor3="/storypage"
          navKey1="home"
          navKey2="character"
          navKey3="story"
          backgroundImage={`/assets/world-page-assets/hero-section-assets/background-image.png`}
        />
        ;
      </header>
    );
  } else if (page === "/characterpage") {
    return (
      <header>
        <HeaderComponent
          header="Legend of the Realms"
          subheader='"Step into the chronicles of Valdenar, Sylvara, Dravakhor, and Nirvalis—realms bound by fate, magic, and celestial will, each holding secrets for those who dare to look beyond the veil."'
          navName1="Return to Base"
          navName2="Realm of Eldoria"
          navName3="Arcane Chronicles"
          anchor1="/"
          anchor2="/worldpage"
          anchor3="/storypage"
          navKey1="home"
          navKey2="world"
          navKey3="story"
          backgroundImage={`/assets/character-page-assets/hero-section-assets/background-image.png`}
        />
        ;
      </header>
    );
  }

  return null;
};

export default Header;
