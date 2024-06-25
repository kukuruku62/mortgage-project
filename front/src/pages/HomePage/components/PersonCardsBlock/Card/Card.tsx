import { Title } from "shared/Title/Title";
import { CustomLinkWithIcon } from "shared/UI/CustomLink/CustomLink";
import { RoutesEnum } from "types/Hrefs";
import { getPersonDataQuery } from "services/GetServices";
import styles from "./Card.module.scss";
import { SkeletonCard } from "./SkeletonCard/SkeletonCard";
import { useState } from "react";

export type NamesPersonProp = {
  name: "Justin" | "Scott";
};

export const Card = ({ name }: NamesPersonProp) => {
  const { data: personData, isSuccess, isLoading } = getPersonDataQuery({ name });
  const addText = "Rates change, but every mortgage journey starts with a relationship. (Pssst...it’s not just about clicking a button)";

  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);

  return (
    <>
      {isLoading && <SkeletonCard />}
      {isSuccess && (
        <article className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              src={personData.photoUrl}
              alt={`${personData.name}'s photo`}
              onLoad={() => setIsImgLoaded(true)}
            />
            {isImgLoaded && (
              <CustomLinkWithIcon
                variant="triangle"
                to={personData.videoUrl}
                textFromQuery={`Meet ${personData.name}`}
                classNameProp={styles.customLink}
              />
            )}
          </div>

          <div className={styles.content}>
            <p className={styles.post}>{personData.title}</p>
            <Title variant="h3" addText={addText} classNameProp={styles.title}>
              {personData.name}
            </Title>
            <p className={styles.skillsTitle}>Skills</p>

            <ul className={styles.skillsContainer}>
              {personData.skills.map(({ _id, icon, name }) => (
                <li key={_id} className={styles.skillItem}>
                  <div className={styles.icon}>
                    <img src={icon} alt={name} />
                  </div>
                  <p className={styles.skillName}>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </>
  );
};
