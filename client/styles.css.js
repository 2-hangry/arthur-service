// -----------------------General Purpose Styling-----------------------------------------
const generalFontFormat = {
  fontSize: 14,
  fontFamily: 'sans-serif',
};

const fontBolded = {
  fontWeight: 'bold',
};

const sectionTitle = {
  fontWeight: 'bold',
  color: 'red',
};

// ----------------------- Business Information Styling-----------------------------------------
const moreBusinessInfoFontSize = {
  fontSize: 13,
};

const basicBorder = {
  borderColor: '#cacad0',
  borderWidth: 'thin',
  borderStyle: 'solid',
  padding: 3,
  maxWidth: 300,
  borderRadius: 3,
};

const hoursTodayStyling = {
  marginTop: 7,
  marginLeft: 5,
};

const horizontalRuleStyling = {
  marginLeft: `${11}%`,
  marginRight: `${2}%`,
};

const clockStyling = {
  width: 28,
  height: 28,
};

const openNowStyling = {
  fontWeight: 'bold',
  color: 'green',
};

const reviewLinkStyling = {
  fontWeight: 'bold',
  color: '#2e6d97',
};

const textMargin = {
  marginTop: 4,
  marginLeft: 6,
};

const dollarSignStyling = {
  width: 17,
  height: 18,
  mode: 'fit',
};

// -----------------------Weekly Hours Styling-----------------------------------------

const editInfoStyling = {
  marginTop: 4,
  marginLeft: 4,
  fontSize: 13,
  color: '#2e6d97',
};

const editInfoPencil = {
  marginTop: 4,
  width: 15,
  height: 15,
  mode: 'fit',
};

const alignDay = {
  textAlign: 'left',
};

const modalStyling = {
  content: {
    top: '50%',
    left: '50%',
    right: '30%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

module.exports.fontBolded = fontBolded;
module.exports.sectionTitle = sectionTitle;
module.exports.moreBusinessInfoFontSize = moreBusinessInfoFontSize;
module.exports.generalFontFormat = generalFontFormat;
module.exports.alignDay = alignDay;
module.exports.openNowStyling = openNowStyling;
module.exports.dollarSignStyling = dollarSignStyling;
module.exports.textMargin = textMargin;
module.exports.basicBorder = basicBorder;
module.exports.modalStyling = modalStyling;
module.exports.reviewLinkStyling = reviewLinkStyling;
module.exports.editInfoStyling = editInfoStyling;
module.exports.editInfoPencil = editInfoPencil;
module.exports.hoursTodayStyling = hoursTodayStyling;
module.exports.horizontalRuleStyling = horizontalRuleStyling;
module.exports.clockStyling = clockStyling;
