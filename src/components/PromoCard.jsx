import React from "react";

import "../style/style.css";
import getImageUrl from "../utils/imageGetter";

function PromoCard({ name }) {
  return (
    <img src={getImageUrl(name, "png")} alt={name} className="w-30 h-[100px] rounded" />
  );
}

export default PromoCard;