import { DonatorPrev } from "./DonatorPrev";
import React from "react";
import Carousel from "react-material-ui-carousel";

export function DonatorsList({ donators, filterBy }) {

  return (
    <section>
      {donators.length && (
        <Carousel duration="1500" interval="7000" indicators={false} style={{height:"70vh"}}>
          {donators.map((donator) => (
            <DonatorPrev key={donator.id} donator={donator} />
          ))}
        </Carousel>
      )}
    </section>
  );
}

