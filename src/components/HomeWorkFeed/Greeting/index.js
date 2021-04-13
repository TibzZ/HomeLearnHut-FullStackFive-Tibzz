import css from "./Greeting.module.css";

function Greeting() {
  return (
    <>
      <h1 className={css.feedTitle}>
        <span>
          Good Morning Teacher, <br />
          upload new work using the + icon or browse previous work below
        </span>
      </h1>
      <hr className={css.separator} />
    </>
  );
}

export default Greeting;
