import React from "react";

const img = {
  width: 17,
  height: 18,
  mode: "fit"
};

const dollarRangeTranslation = {
  $: "under $10",
  $$: "$11-30",
  $$$: "$31-60",
  $$$$: "above $61"
};

const dollarRangeTranslationStyinling = {
  fontSize: 14,
  fontFamily: "sans-serif"
};

const generalMargin = {
  marginBottom: 8
};

const PriceRange = props => {
  const green = "27ae60";
  let colorArr = ["cccccc", "cccccc", "cccccc", "cccccc"];
  for (var i = 0; i < props.price.length; i++) {
    colorArr[i] = green;
  }
  return (
    <div style={generalMargin}>
      {colorArr.map(dollar => {
        const dollarString = `https://png.icons8.com/metro/50/${dollar}/us-dollar.png`;
        return <img src={dollarString} style={img} />;
      })}
      <span style={dollarRangeTranslationStyinling}>
        <span>Price Range </span>
        <span verticalAlign="top">{dollarRangeTranslation[props.price]}</span>
      </span>
      <a href="https://icons8.com" />
    </div>
  );
};

export default PriceRange;
