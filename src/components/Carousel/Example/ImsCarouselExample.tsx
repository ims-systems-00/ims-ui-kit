import React from "react";
import ImsCarousel from "../ImsCarousel";
import CardBodyBase from "../../Cards/CardBodyBase";
import CardBase from "../../Cards/CardBase";

const DashboardCarouselExample = ({}) => {
  let isShowAble = false;
  return (
    <ImsCarousel>
      <CardBase>
        <CardBodyBase>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBodyBase>
      </CardBase>
      {true && (
        <CardBase>
          <CardBodyBase>Rafee</CardBodyBase>
        </CardBase>
      )}
      {isShowAble && (
        <CardBase>
          <CardBodyBase>test</CardBodyBase>
        </CardBase>
      )}
      <CardBase>
        <CardBodyBase>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBodyBase>
      </CardBase>
      <CardBase>
        <CardBodyBase>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBodyBase>
      </CardBase>
      <CardBase>
        <CardBodyBase>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          neque quasi ex, dignissimos accusamus est, itaque, deserunt
          voluptatibus odio praesentium iure? Commodi reiciendis at eveniet.
        </CardBodyBase>
      </CardBase>
    </ImsCarousel>
  );
};

export default DashboardCarouselExample;
