import React, { useEffect, useRef } from "react";

export function BASFClock(props) {
  const clockRef = useRef(null);

  useEffect(() => {
    fetch(
      "https://d1iq3ppa2tzmm4.cloudfront.net/basf-countdown-clock-source.html"
    )
      .then((response) => response.text())
      .then((html) => {
        clockRef.current.innerHTML = html;
      });
  });

  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        type="text/css"
        href="//d1iq3ppa2tzmm4.cloudfront.net/basf-countdown-clock-source.css"
      />
      <div id="countdown-clock-widget-618815" ref={clockRef}></div>
    </React.Fragment>
  );
}
