import style from "./card.module.css";

const Card = (obj) => {
  return (
    <div className={style.container}>
      <h3>{obj.title}</h3>
      <img src={obj.image} alt="{image}" />
      <p>{obj.description}</p>
      <p>likes: {obj.likes}</p>
      <p>comments: {obj.comments}</p>

    </div>
  );
};

export default Card;
