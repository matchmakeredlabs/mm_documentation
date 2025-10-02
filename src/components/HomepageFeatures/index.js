import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: "Built for Learning Engineering",
    imageUrl: "/img/learning_engineering.png",
    description: (
      <>
        Designed from the ground up with learning engineering principles in
        mind, our platform helps you create effective, data-informed learning
        experiences—right out of the box.
      </>
    ),
  },
  {
    title: "Stay Focused on Impact",
    imageUrl: "/img/impact.png",
    description: (
      <>
        Spend less time on overhead and more time optimizing learner outcomes.
        Our tools streamline the process so you can focus on what matters:
        improving learning through evidence and iteration.
      </>
    ),
  },
  {
    title: "Extensible & Adaptable",
    imageUrl: "/img/extensible.png",
    description: (
      <>
        Customize your workflow with ease. Our platform is modular and
        extensible—ready to grow with your needs while maintaining consistent
        design and functionality.
      </>
    ),
  },
];

function Feature({ Svg, imageUrl, title, description }) {
  const imgSrc = imageUrl ? useBaseUrl(imageUrl) : null;

  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : imageUrl ? (
          <img src={imgSrc} alt={title} className={styles.featureSvg} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
