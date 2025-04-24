import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

import { UserProps } from "../types/user";
import classes from "./User.module.css";

const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div className={classes.followers}>
          <p>Seguidores: </p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div className={classes.following}>
          <p>Seguindo: </p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver os Projetos</Link>
    </div>
  );
};

export default User;
