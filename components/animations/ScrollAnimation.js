import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
7;
const ScrollAnimation = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className="scroll_animation">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>
              Lets test some Animation on this site
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "40px" }}>
              This is a new Content to see.
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: "40px" }}>
              New Animation to take a look at.
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>
                Glad to have you here.
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>Nikolai Schunk</Animator>
              <Animator animation={MoveOut(1000, 0)}>Dennis Miceli</Animator>
              <Animator animation={MoveOut(-1000, 0)}>Kayle Hehlen</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              Some Cool animations omgomg
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default ScrollAnimation;
