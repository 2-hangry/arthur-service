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

const textMargin = {
  marginTop: 4,
  marginLeft: 6
};

const PriceRange = props => {
  const green = "27ae60";
  let colorArr = ["cccccc", "cccccc", "cccccc", "cccccc"];
  for (var i = 0; i < props.price.length; i++) {
    colorArr[i] = green;
  }
  return (
    <div>
      <span style={{ display: "flex" }}>
        {colorArr.map(dollar => {
          const dollarString = `https://png.icons8.com/metro/50/${dollar}/us-dollar.png`;
          return <img src={dollarString} style={img} />;
        })}
        <p
          style={{
            marginTop: 4,
            marginLeft: 6
          }}
        >
          Price range
        </p>
        <p
          style={{
            marginTop: 4,
            marginLeft: 6,
            fontWeight: 'bold'
          }}
        >
          {dollarRangeTranslation[props.price]}
        </p>
      </span>
      <a href="https://icons8.com" />
    </div>
  );
};

export default PriceRange;
