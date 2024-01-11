import styles from "./about.module.css";

export default function About() {
  return (
    <div className="">
      <div className={styles.aboutpage}>
        <h1 className={styles.abouttitle}>About Me</h1>
        <p className={styles.topaboutcontainer}>
          <div className={styles.aboutontainer}>
            I am an individual who has often been described as meticulous and
            orderly. I have a profound love for reading and spending extended
            periods in front of a computer, particularly when engaged in
            mentally challenging activities.
          </div>
          <div className={styles.aboutontainer}>
            I do possess the
            ability to collaborate effectively in a team. However, my true
            passion lies in immersing myself in cerebral puzzles and strategic
            thinking.
          </div>
          <div className={styles.aboutontainer}>
            During work, I will often find me wearing headphones and pursuing my
            tasks. I also have a deep appreciation for movies and series and
            occasionally immerse myself in games.
          </div>
          <div className={styles.aboutontainer}>
            Tend to be naturally reserved, preferring to listen rather than initiate
            conversation, only speaking when necessary or asked. I exhibit
            patience, but when I perceive an injustice toward myself, I do not
            hesitate to address it.
          </div>
          <div className={styles.aboutontainer}>
            Despite recognizing the world's inherent unfairness, I maintain a
            profound sense of gratitude for my circumstances.
          </div>
          <div className={styles.aboutontainer}>
            Truthfulness is a core value for me; I make a concerted effort to
            always tell the truth or, at the very least, refrain from
            dishonesty, recognizing the difficulty in doing so.
          </div>
          <div className={styles.aboutontainer}>
            I have a continuous commitment to self-improvement, regularly
            comparing my present self to who I was yesterday.
          </div>
          <div className={styles.aboutontainer}>
            Conflict is something I actively avoid, but I thrive in a
            competitive environments. I am more inclined to self-critique rather
            than criticize others.
          </div>
          <div className={styles.aboutontainer}>
            Finally, I hold an appreciation for the finer details of life,
            including a well-crafted keyboard, a good cup of coffee, and a
            comfortable chair.
          </div>
        </p>
      </div>
    </div>
  );
}
