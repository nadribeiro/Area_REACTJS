import { useEffect, useState } from "react";

export default function Resultado({ area }) {
  
  return (
    <div className="Resultado">
      <p>AREA: {area} m²</p>
    </div>
  );
}