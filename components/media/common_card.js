/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { SubTitle } from "../items/typography";
import Image from "next/image";
const Common_card = ({
  type,
  name,
  tag,
  description,
  path,
  format,
  size,
  pro,
  contra,
}) => {
  return (
    <div className="common_card column card">
      <div className="card-image">
        <figure className="image">
          {type === "video" ? (
            <video width="640" height="240" autoPlay muted loop>
              <source src={path} />
            </video>
          ) : (
            ""
          )}
          {type === "image" ? (
            <Image
              src={path}
              alt={tag + "_" + format}
              width={400 + "px"}
              height={500 + "px"}
            />
          ) : (
            ""
          )}
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="is-title is-5">{name}</p>
          {type === "audio" ? (
            <audio src={path} controls>
              Error: your web browser does not support this audio player.
            </audio>
          ) : (
            ""
          )}
          {/* <span className="tag is-primary is-light is-6">{tag}</span> */}
        </div>

        <div className="content pb-1">
          <div className="description" style={{ height: 130 + "px" }}>
            {description}
          </div>
          <SubTitle text="Pro" />
          {pro.map((p) => (
            <div>
              <p key={p}>- {p}</p>
            </div>
          ))}
          <SubTitle text="Contra" />
          {contra.map((c) => (
            <div>
              <p>- {c}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="card-footer">
        <p className="is-text card-footer-item">{size}</p>
        <p className="is-text card-footer-item">{format}</p>
      </footer>
    </div>
  );
};

export default Common_card;
