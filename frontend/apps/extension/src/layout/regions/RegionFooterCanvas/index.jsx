/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import {Link} from '@reach/router';

/* --- Component --- */
export default ({sx}) => {
  return (
    <Atom.Flex alignCenter between sx={sx}>
      {/* Left */}
      <Atom.Flex alignCenter>
        <Link to="/support">
          <Atom.Span>Support</Atom.Span>
        </Link>
      </Atom.Flex>

      {/* Right */}
      <Atom.Flex alignCenter>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/gitcoinco/cerebro">
          <Atom.Span sx={{fontSize: 0}}>Code</Atom.Span>
        </a>
      </Atom.Flex>
    </Atom.Flex>
  );
};
