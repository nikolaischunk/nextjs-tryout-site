import image_low_detail from "../../../public/media/images/low-detail-2.jpeg";
import image_high_detail from "../../../public/media/images/high-detail.jpeg";
import Divider from "../../items/divider";
import { SubTitle } from "../../items/typography";
const Common_card = () => {
  return (
    <div className="common_card container">
      <div className="columns mt-3">
        <div className="column is-4">
          <div className="card">
            <div className="card-image">
              <div className="image">
                <img src="/media/images/high-detail.jpeg" alt="abc" />
              </div>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">IMAGE FORMAT</p>
                  <p className="subtitle is-6">@high detail</p>
                </div>
              </div>

              <div className="content">
                {/* SOME DESCRIPTION HERE?*/}
                The original version of the image with high amount of detail in
                it. The Format that most phones that the pictures with is JPEG.
             
                <Divider text="" />
                {/* USAGE HERE */}
                Whats the usage for this image format?
                <Divider text="" />
                {/* Pro/Contra */}
                <SubTitle text="Pro" />
                <p>xyz</p>
                <SubTitle text="Contra" />
                <p>xyz</p>
                {/* <Divider text="" /> */}
              </div>
            </div>
            <footer class="card-footer">
              <p className="is-text card-footer-item">516kB</p>
              {/* <p className="is-text card-footer-item">516kB</p> */}
              <p className="is-text card-footer-item">JPEG</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common_card;
