import Image from "assets/header-main-page.webp";
import Logo from "assets/svg/logo-colored.svg";
import { useState } from "react";
import { MenuButton } from "shared/MenuButton/MenuButton";
import { Title } from "shared/Title/Title";
import { ActionToolbar } from "shared/ActionToolbar/ActionToolbar";
import { getDurationVideoQuery } from "services/GetServices";
import { CustomLinkWithIcon } from "shared/UI/CustomLink/CustomLink";
import { YouTubePathsEnum, PersonsNameAndYTIds} from "types/IYouTube";
import styles from "./Header.module.scss";


export const Header = () => {

  const { data, isLoading, isError } = getDurationVideoQuery(PersonsNameAndYTIds.Intro);
  const addText = "Rates change, but every mortgage journey starts with a relationship. (Pssst...it’s not just about clicking a button)";

  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);


  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <MenuButton />

          {(isError || isLoading || !isImgLoaded) ? null : (
            <CustomLinkWithIcon
              variant="triangle"
              textFromQuery={data}
              to={YouTubePathsEnum.Intro}
              classNameProp={styles.headerCustomLink}
              title="Why a mortgage is so much more than just a rate?"
            />
          )}

          <div className={styles.leftPart}>
            <img
              src={Image}
              alt="A photo of a cat against the background of a woman’s and a man’s legs in a pleasant setting."
              onLoad={() => setIsImgLoaded(true)}
            />
          </div>

          <section className={styles.rightPart}>
            <div className={styles.rightPartContent}>
              <img src={Logo} alt="Logo new mortgage funding" />
              <Title variant="h1" classNameProp={styles.title} addText={addText}>
                Finding a mortgage is so <span>much more</span> than <span>just a rate</span>
              </Title>
              <ActionToolbar classNameProp={styles.headerToolbar}>
                <p>Let us help you create your mortgage journey</p>
              </ActionToolbar>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};
