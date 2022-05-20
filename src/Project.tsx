import globe from './images/globe.svg';
import github from './images/github.svg';

type ProjectProps = {
  name: string;
  description: string;
  website: string;
  github: string;
};

function Project(props: ProjectProps) {
  return (
    <div className="row">
      <div className="col-md-10">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="col-md-1 link">
        <a href={props.website}>
          <img src={globe} alt="" className="icon" />
          <div>Website</div>
        </a>
      </div>
      <div className="col-md-1 link">
        <a href={props.github}>
          <img src={github} alt="" className="icon" />
          <div>Github</div>
        </a>
      </div>
    </div>
  );
}

export default Project;
