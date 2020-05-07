/**
 * @function LabelValue
 * @param {*} param0
 */
const LabelValue = ({label, value, hr, sxLabel, sxValue, sx}) => {
  return (
    <Atom.Flex column sx={{my: 3, ...sx}}>
      <Atom.Span sx={{fontSize: [0, 0, 1], fontWeight: '700', ...sxLabel}}>
        {label}
      </Atom.Span>
      {hr && <Atom.HorizontalRule sx={{width: 12, my: 1}} />}
      <Atom.Span sx={{fontSize: [0, 0, 1], ...sxValue}}>{value}</Atom.Span>
    </Atom.Flex>
  );
};
export default LabelValue;
