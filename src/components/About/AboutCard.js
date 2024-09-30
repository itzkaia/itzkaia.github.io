import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left"}}>
            Hi! Hello! Kumusta!
            <br />
            <br />
            I'm <b className="purple">Kaia Burgos </b>
            - a graduating senior at the University of Washington in rainy Seattle.
            I study <b className="purple">Electrical & Computer Engineering and Data Science</b>, and I love bringing ideas to life.
            <br />
            <br />
            I'm passionate about <b className="purple">people and ideas</b> -- I strive to build technology that elevates the human
            experience and I embrace any opportunity to do so.
            <br />
            <br />
            Outside of work and school, I can probably be found hobbying or adventuring. I'm an avid explorer -- ask me about
            food/drink/hike recs! In my down time, I'll either be making new Spotify playlists, or making Pinterest boards.
            Otherwise likely fiddling on some new hyperfixation; here's some of my current
            interests:
          </p>
          <ul style={{ textAlign: "left", listStyleType: "disc" }}>
            <li>Guitar (inspirations: John Mayer, Paul McCartney)</li>
            <li>Volleyball</li>
            <li>Legos</li>
            <li>Tennis</li>
            <li>Sudoku</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
