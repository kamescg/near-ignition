/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */
import {
  AccountSpaces,
  ProfilePreview,
  OpenSpaceButton,
  OpenGhostThreadButton,
  ThreadPosts,
} from '3box-system';
/* --- Local --- */

/* --- Screen : Component --- */
const Screen = (props) => {
  return (
    <Atom.Flex sx={{ height: '100%', width: '100%' }}>
      <AsideLeft />
      <Main />
      <AsideRight />
    </Atom.Flex>
  );
};

const AsideLeft = (props) => {
  return <Atom.Flex sx={{ flex: 1, p: 4 }}>Left</Atom.Flex>;
};
const Main = (props) => {
  return (
    <Atom.Flex sx={{ flex: 4, p: 3 }}>
      <Showcase />
    </Atom.Flex>
  );
};
const AsideRight = (props) => {
  return (
    <Atom.Flex sx={{ bg: 'white', flex: 1, p: 4 }}>
      <Atom.Span>
        <OpenSpaceButton space="horizin" />
        <OpenGhostThreadButton space="horizin" thread="secret" />
        <ThreadPosts space="horizin" thread="secret" />
        <ThreadPosts space="horizin" thread="winning" />
      </Atom.Span>
    </Atom.Flex>
  );
};

/* --- Showcase : Component --- */
const Showcase = (props) => {
  return (
    <Atom.Box sx={styleShowcase}>
      <Atom.Container>
        <Atom.Box card sx={{ mx: 'auto' }}>
          <ProfilePreview />
        </Atom.Box>
      </Atom.Container>
    </Atom.Box>
  );
};

const styleShowcase = {
  // bg: 'blue',
  // color: 'white',
  py: [4, 4, 5],
  width: '100%',
};

export default Screen;
