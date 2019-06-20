// #rectangle, #text, #share-icon, #button
const button = document.getElementById("button");
const rectangle = document.getElementById("rectangle");
const text = document.getElementById("text");
const share = document.getElementById("share");
const icons = document.querySelectorAll(".eachicon");
const iconsCont = document.getElementById("icons");

let allowClick = true;
button.addEventListener("click", () => {
  if (allowClick === true) {
    const buttonAnimation = new TimelineMax();
    const expandButton = new TimelineMax();
    const hideShare = new TimelineMax();

    buttonAnimation.to(button, 0.1, {
      transform: "scale(1.1)"
    });
    buttonAnimation.to(button, 0.1, {
      transform: "scale(0.9)"
    });
    buttonAnimation.to(button, 0.2, {
      transform: "scale(1)"
    });
    expandButton
      .to(rectangle, 0.2, {
        transform: "scaleX(2)"
      })
      .delay(0.19);
    hideShare
      .to([share, text], 0.2, {
        opacity: "0"
      })
      .delay(0.1);
    icons.forEach(icon => {
      expandButton.to(icon, 0.2, {
        transform: "translateY(0px)",
        opacity: "1"
      });
    });
    expandButton.to(iconsCont, 0, {
      pointerEvents: "all"
    });
    allowClick = false;
    setTimeout(() => {
      const closeButton = new TimelineMax();

      icons.forEach(icon => {
        closeButton.to(icon, 0.1, {
          transform: "translateY(-30px)",
          opacity: "0"
        });
      });
      closeButton
        .to(rectangle, 0.2, {
          transform: "scaleX(1)"
        })
        .delay(0.19);
      closeButton.to(button, 0.2, {
        transform: "scale(1)"
      });
      closeButton
        .to([share, text], 0.2, {
          opacity: "1"
        })
        .delay(0.1);
      closeButton.to(iconsCont, 0, {
        pointerEvents: "none"
      });
      allowClick = true;
    }, 6000);
  }
});
