import { hooks } from "3box-system";
/**
 *
 * @param props
 */
export const AccountSpaces = (props) => {
  const spaces = hooks.useGetSpaces();

  return (
    <Atom.Flex column>
      <Atom.Heading>Spaces</Atom.Heading>
      <Atom.Flex column>
        {spaces && spaces.map((space) => <Atom.Span>{space}</Atom.Span>)}
      </Atom.Flex>
    </Atom.Flex>
  );
};
