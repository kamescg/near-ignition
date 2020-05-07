/* --- CardFeature : Component --- */
const CardFeature = ({image, title, content, to = '/', sx}) => {
  return (
    <Atom.Box sx={sx}>
      <Atom.Span pointer mb2 variants={['icon', 'transition', 'shadowHover']}>
        <Atom.Image src={image} sx={{width: 35}} />
      </Atom.Span>
      <Atom.Heading as="h5" sx={{fontSize: [2, 2, 3]}}>
        {title}
      </Atom.Heading>
      <Atom.Paragraph sm>{content}</Atom.Paragraph>
      <Molecule.Link to={to}>
        <Atom.Button sm white>
          Learn More
        </Atom.Button>
      </Molecule.Link>
    </Atom.Box>
  );
};
export default CardFeature;
