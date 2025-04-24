import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import { RepoProps } from "../types/repo";

const Repo = ({
  name,
  html_url,
  language,
  stargazers_count,
  forks_count,
}: RepoProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank">
        <span>Ver repositório</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
