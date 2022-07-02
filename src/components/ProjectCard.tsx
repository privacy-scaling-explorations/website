import docs from "../images/website.svg";
import github from "../images/github.svg";
import discord from "../images/discord.svg";
import twitter from "../images/twitter.svg";
import telegram from "../images/telegram.svg";
import img_link from "../images/box_arrow_out.svg";
import "./ProjectCard.css";
import ColorHash from "color-hash";
import { title } from "process";
import ProjectDescription from "./ProjectDescription";

export interface ProjectCardProps {
  name: string;
  short_name?: string;
  description: string | string[];
  long_description?: string | string[];
  image?: string;
  links?: Links[];
  renderBanner?: boolean;
}

interface Links {
  github?: string;
  website?: string;
  discord?: string;
  twitter?: string;
  telegram?: string;
  documentation?: string;
}

function renderLink(url: string, source: string, icon: string, button: boolean = false, text: boolean = false): any {
  // The next few lines check if the link begins with a protocol like http or https, and if it doesn't, it adds the '//' to the beginning of the link to make it an http(s) link.
  let RgExp = new RegExp("^(?:[a-z]+:)?//", "i");
  if (!RgExp.test(url)) {
    url = "//" + url;
  }
  if (!button) {
    return (
      <div className="link" key={url}>
        <a href={url} target="_blank">
          <img className="icon" src={icon} alt={source} />
          {text ? <div className="link-title">{source}</div> : null}
        </a>
      </div>
    );
  } else {
    return (
      <div className="link" key={url}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ backgroundColor: `var(--${source})` }}
        >
          <img className="icon" src={icon} alt={source} />
          {text ? <div className="link-title">{source}</div> : null}
        </a>
      </div>
    );
  }
}

function renderBanner(name: string): any {
  let hueRange = { min: 45, max: 360 };
  let colorHashText = new ColorHash({ hue: hueRange, lightness: [0.8, 0.9] }).hex(name);
  let colorHashBG = new ColorHash({
    hue: hueRange,
    lightness: [0.35, 0.4],
    saturation: [0.65, 0.85, 1],
  }).hex(name);
  return (
    <svg height="150px" width="350px" style={{ backgroundColor: colorHashBG }} className="card-img-top">
      <text
        textAnchor="middle"
        x="50%"
        y="58%"
        fill={colorHashText}
        style={{ fontSize: "2.5rem", fontStyle: "italic" }}
      >
        {name}
      </text>
    </svg>
  );
}

function renderDescription(description: string | string[]): any {
  if (typeof description === "string") {
    return <p className="card-text-project">{description}</p>;
  }
  return description.map((text: string, index: number) => {
    return (
      <p className="card-text-project" key={index}>
        {text}
      </p>
    );
  });
}

function ProjectCard(props: ProjectCardProps) {
  const docLinks = props.links
    ? props.links.map((link) => {
      if (link.github) {
        return renderLink(link.github, "github", github);
      } else if (link.documentation) {
        return renderLink(link.documentation, "website", docs);
      } else {
        return null;
      }
    })
    : null;

  const socialLinks = props.links
    ? props.links.map((link) => {
      if (link.discord) {
        return renderLink(link.discord, "discord", discord);
      } else if (link.twitter) {
        return renderLink(link.twitter, "twitter", twitter);
      } else if (link.telegram) {
        return renderLink(link.telegram, "telegram", telegram);
      } else {
        return null;
      }
    })
    : null;

  let img = (() => {
    try {
      if (props.image) {
        let imageSource;
        if (props.image.startsWith("http")) {
          imageSource = props.image;
        } else {
          imageSource = require(`../images/${props.image}`);
        }

        return <img className="card-img-top" src={imageSource} alt={props.name} />;
      } else if (props.renderBanner == true || props.renderBanner == undefined) {
        return renderBanner(props.short_name || props.name);
      } else {
        return null;
      }
    } catch (e) {
      if (props.renderBanner == true || props.renderBanner == undefined) {
        return renderBanner(props.short_name || props.name);
      } else {
        return null;
      }
    }
  })();

  const title = (props: ProjectCardProps) => {
    let title_with_link;
    if (props.links) {
      for (let link in props.links) {
        if (props.links[link].website) {
          title_with_link = (
            <a href={props.links[link].website} target="_blank">
              <div>{props.name}</div>
              <div style={{ width: "0.8125rem" }} />
              <img src={img_link} role="presentation" alt="Go to project website" />
            </a>
          );
        }
      }
    }
    if (title_with_link) {
      return title_with_link;
    }
    return <div>{props.name}</div>;
  };

  return (
    <div className="card border border-dark">
      {img}
      <div className="card-body">
        <div className="card-title">{title(props)}</div>
        {renderDescription(props.description)}
      </div>
      <ProjectDescription title={title(props)} long_description={props.long_description}></ProjectDescription>
      <div className="card-footer">
        <div className="docs-links">{docLinks}</div>
        <div className="social-links">{socialLinks}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
